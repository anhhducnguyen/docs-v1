## 🚀 Topic: **Building a student identity authentication system using facial recognition in testing**

## 🌟 Introduction

The topic is to build a student identity authentication system based on facial recognition technology for testing (at Phenikaa University) to ensure accuracy, transparency and safety in exams

<img width="863" height="1080" alt="image" src="https://github.com/user-attachments/assets/7106414b-7ec9-42ad-b6c8-2a3e42f2d099" />

## Architecture

[Client-Server Architecture - System Design](https://www.geeksforgeeks.org/system-design/client-server-architecture-system-design/)

![image](https://github.com/user-attachments/assets/2f98fd2e-1728-4298-9354-58efb40fbca9)

- [Knex](https://knexjs.org/)
- [JWT](https://jwt.io/)

## Prerequisites
Before you start, make sure you have the following prerequisites installed on your system:

- [NodeJS](https://nodejs.org/en/download) _(version 20.18.0 or higher)_
- [MySQL](https://www.mysql.com/downloads/) _(or any other supported database system)_
- [Python](https://www.python.org/) _(version 3.12.0 or higher)_
- [opencv_python](https://opencv.org/) _(version 4.10.0.84 or higher)_
- [dlib](https://github.com/davisking/dlib) _(here I got an error when trying `pip install dlib`, if you get an access error [Dlib_Windows_Python3.x](https://github.com/z-mahmud22/Dlib_Windows_Python3.x) to install manually following the instructions)_
- [insightface](https://github.com/deepinsight/insightface) _(used as the primary face recognition library)_
- [face-recognition](https://github.com/ageitgey/face_recognition) _(version 1.3.0 or higher)_
- [Silent-Face-Anti-Spoofing](https://github.com/minivision-ai/Silent-Face-Anti-Spoofing) _(author: minivision-ai)_

## 🔧 Step-by-step installation
#### **Step 1**: Install NodeJS

- Make sure `NodeJS` is installed. You can check their version with the following commands:

```bash
node -v
```

#### **Step 2**: After installing `NodeJS`, you can download the project:

```bash
git clone https://github.com/anhhducnguyen/Face-Auth-Exam-System-v2.git
```

#### **Step 3**: Reconfigure the `.env` file according to the following information
- If you want to use `MySQL`, update the `DB_`* variables in the `server\.env` configuration file as follows:
  
    ```php
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_db_password
    DB_NAME=exammanagement_do_an

    TOKEN_SECRET=your_token_secret

    EMAIL_USER=your_email@example.com	
    EMAIL_PASS=your_email_password

    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

    SESSION_SECRET=your_session_secret
    JWT_SECRET=your_jwt_secret
    ```


#### **Step 4**: <a href="#"><img alt="MySQL" src="https://img.shields.io/badge/MySQL-4479A1.svg?logo=MySQL&logoColor=white"></a> Create the database

#### **Step 5**: Once the project has been created

```bash
cd Face-Auth-Exam-System-v2
```

```bash
cd server
npm install
npm run dev 
```

```bash
cd admin
npm install
npm run dev 
```

```bash
cd client
npm install
npm run dev 
```

```bash
cd Silent-Face-Anti-Spoofing
pip install -r requirements.txt
python main.py
```



See details at our [Issue](https://github.com/anhhducnguyen/Face-Auth-Exam-System-v2/issues/1)

## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

© 2025 Nguyen Duc Anh




