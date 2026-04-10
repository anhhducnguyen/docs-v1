---
description: Referencia de los comandos CLI de , incluyendo dev, build, preview e init.
---

# Intefaz de Linea de Comando {#command-line-interface}

## `vitepress dev`

 Inicia el servidor de desarrollo  con el directorio designado como raíz. Por defecto, utiliza el director actual. el comando `dev` también se puede omitir cuando se ejecuta el directorio actual.

### Uso

```sh
# Comienza en el directorio actual, omite el `dev`
vitepress

# iniciar en un subdirectorio
vitepress dev [root]
```

### Opciones {#options}

| Opciones        | Descripción                                                       |
| --------------- | ----------------------------------------------------------------- |
| `--open [path]` | Abre el navegador en el inicio (`boolean \| string`)                     |
| `--port <port>` | Especifica el puerto (`number`)                                           |
| `--base <path>` | Ruta de base pública (por defecto: `/`) (`string`)                        |
| `--cors`        | Habilitar CORS                                                       |
| `--strictPort`  | Salir si el puerto especificado ya esta en uso (`boolean`)              |
| `--force`       | Obligar al optimizador a ignorar el cache y volver a empaquetar (`boolean`) |

## `vitepress build`

Compilar el sitio web de  para producción.

### Uso

```sh
vitepress build [root]
```

### Opciones

| Opción                         | Descripción                                                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `--mpa` (experimental)         | Compilar en [Modo MPA](../guide/mpa-mode) Sin hidratación del lado del cliente  (`boolean`)                                    |
| `--base <path>`                | Ruta de base pública (por defecto: `/`) (`string`)                                                                          |
| `--target <target>`            | Transpilar objetivo (por defecto: `"modules"`) (`string`)                                                                  |
| `--outDir <dir>`               | Directorio de salida relativo a **cwd** (por defecto: `<root>/.vitepress/dist`) (`string`)                                 |
| `--assetsInlineLimit <number>` | Limitar los bytes para alinear los activos en base 64 (por defecto: `4096`) (`number`)                                      |

## `vitepress preview`

Proporciona localmente la compilación de la producción.

### Uso

```sh
vitepress preview [root]
```

### Opciones

| Opción          | Descripción                                |
| --------------- | ------------------------------------------ |
| `--base <path>` | Ruta de base pública (por defecto: `/`) (`string`) |
| `--port <port>` | Especifica el puerto (`number`)                    |

## `vitepress init`

Inicia el [Asistente de Instalación](../guide/getting-started#setup-wizard) en el directorio actual.

### Uso

```sh
vitepress init
```
