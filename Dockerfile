# Usar una imagen ligera de Nginx
FROM nginx:alpine

# Eliminar archivos por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar nuestra aplicación al directorio de Nginx
COPY ./app /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]