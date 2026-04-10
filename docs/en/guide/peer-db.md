# ClickHouse Cloud + PeerDB Setup Guide

## 1. Clone repository

```bash
git clone git@github.com:PeerDB-io/peerdb.git
cd peerdb
```

Giải thích:
- Clone source code của PeerDB từ GitHub về máy.
- Di chuyển vào thư mục project.

---

## 2. Chạy PeerDB bằng Docker

### Cách nhanh:

```bash
bash ./run-peerdb.sh
```

Giải thích:
- Script này sẽ tự động khởi chạy toàn bộ hệ thống:
  - PostgreSQL (làm catalog)
  - Temporal (workflow engine)
  - PeerDB server
  - API + worker
  - UI

---

### Cách dev (build local):

```bash
bash ./generate-protos.sh
bash ./dev-peerdb.sh
```

Giải thích:
- generate-protos.sh: sinh code từ protobuf
- dev-peerdb.sh: build và chạy container local

---

## 3. Reset lại hệ thống Docker (nếu lỗi)

```bash
docker compose down
docker compose down -v
docker compose build --no-cache
docker compose up -d
docker ps
```

Giải thích:
- down: dừng container
- down -v: xoá luôn volume (xoá dữ liệu cũ)
- build --no-cache: build lại image từ đầu
- up -d: chạy nền
- docker ps: kiểm tra container đang chạy

---

## 4. Kết nối vào PeerDB

```bash
psql "port=9900 host=localhost password=peerdb"
```

Giải thích:
- Kết nối vào database PeerDB bằng psql
- Port 9900 là port mặc định của PeerDB

---

## 5. Cấu hình ClickHouse

### Tạo database

```sql
CREATE DATABASE peerdb;
```

Giải thích:
- Tạo database riêng để PeerDB sync dữ liệu vào

---

### Tạo user

```sql
CREATE USER peerdb_user IDENTIFIED BY '<password>';
```

Giải thích:
- Tạo user riêng để PeerDB sử dụng

---

### Cấp quyền

```sql
GRANT INSERT, SELECT, DROP, CREATE TABLE ON peerdb.* TO peerdb_user;
GRANT CREATE TEMPORARY TABLE, s3 ON *.* TO peerdb_user;
GRANT ALTER ADD COLUMN ON peerdb.* TO peerdb_user;
```

Giải thích:
- INSERT, SELECT: ghi và đọc dữ liệu
- CREATE TABLE: tạo bảng tự động
- DROP: xoá bảng khi cần
- CREATE TEMPORARY TABLE, s3: dùng để staging qua S3/MinIO
- ALTER ADD COLUMN: tự động thêm cột khi schema thay đổi

---

## 6. Lấy IP để whitelist

```bash
curl ifconfig.me
```

Giải thích:
- Lấy IP public của máy để thêm vào ClickHouse Cloud

---

## 7. Expose MinIO bằng ngrok

```bash
ngrok http 9001
```

Giải thích:
- Port 9001 là port của MinIO
- Ngrok tạo URL public để ClickHouse truy cập được MinIO

[minio UI](http://127.0.0.1:9002/login)

```
_user: _peerdb_minioadmin
_pass: _peerdb_minioadmin
```

---

## 8. Cập nhật docker-compose.yml

```yaml
PEERDB_CLICKHOUSE_AWS_CREDENTIALS_AWS_ENDPOINT_URL_S3: https://your-ngrok-url
```

Giải thích:
- Thay bằng URL ngrok vừa tạo
- Giúp ClickHouse truy cập được MinIO trong Docker

---

## 9. Lưu ý quan trọng

- ClickHouse Cloud không truy cập được localhost → cần ngrok hoặc S3 thật
- MinIO chỉ dùng cho dev/test
- Production nên dùng AWS S3
- Đảm bảo user ClickHouse có đủ quyền
