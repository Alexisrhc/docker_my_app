# my_web — Primera aplicación con Docker

## Descripción
- Repositorio que contiene mi primera aplicación empaquetada con Docker.
- Uso de la imagen nginx de docker

## Propósito
demostrar las hablididades en docker con una app sencilla.

Requisitos
- Docker instalado.
- wsl (opcional si estas en windows)
- Docker Desktop
- Docker compose

Cómo construir y ejecutar
1. Clonar repositorio
    ```
    git clone (HTTPS) | (SSH)
    ```
2. Construir la imagen:
    ```
    docker compose up -d --build
    ```
3. Ir al navegador: [localhost:8081](http://localhost:8081)


Estructura sugerida
- Dockerfile — definición de la imagen
- app/ — código fuente de la aplicación
- README.md — este archivo

Autor y contacto
- Usuario GitHub: [alexisrhc](https://github.com/alexisrhc)
- Correo: [alexisrhc@hotmail.com](mailto:alexisrhc@hotmail.com)

Notas
- Este proyecto fue realizado como mi primera aplicación con Docker.
- Si necesitas que añada instrucciones específicas según el lenguaje o framework de la app, indícalo.