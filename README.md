# BlogVR-JS
# Descripción breve del proyecto, qué problema resuelve y cualquier información relevante que los usuarios o desarrolladores necesiten saber.

# 'Características Implementadas'
#  Express.js: Marco de aplicación web para Node.js, diseñado para construir    aplicaciones web y APIs de manera rápida y fácil.

#  Swagger: Utilizado para la documentación de la API, permitiendo a los desarrolladores y usuarios probar los endpoints directamente desde la interfaz de usuario de Swagger.

#  CORS: Habilitado para permitir solicitudes de origen cruzado de manera segura, configurando de forma adecuada los encabezados de control de acceso.

#  Manejo de Imágenes en Base64: Soporte para enviar y recibir imágenes codificadas en base64 a través de la API, permitiendo la inclusión de imágenes directamente en el cuerpo de las solicitudes.

#  Registro de Solicitudes: Middleware personalizado implementado para registrar detalles de cada solicitud y respuesta en un archivo log.txt, incluyendo la hora, el método, la URL, el cuerpo de la solicitud y la respuesta.

#  Requisitos Previos

#  Node.js recomendada 18.16.00
#  npm

#  'Cómo Levantar el Proyecto'
#  Clonar el Repositorio

# sh
# Copy code
# git clone [url-del-repositorio](https://github.com/BryanEspana/BlogVR-JS)
# cd nombre-del-proyecto
# Instalar Dependencias

# Usando npm:

# sh
# Copy code
# npm install

# Ejecutar el Proyecto

# sh
# Copy code
# npm start


# Cómo Usar la Documentación de Swagger
# Después de iniciar el servidor, visita http://localhost:3000/api-docs para acceder a la documentación interactiva de la API de Swagger. Aquí podrás ver todos los endpoints disponibles y probarlos directamente desde tu navegador.

# Manejo de CORS
# La configuración actual permite solicitudes de cualquier origen. Consulta el archivo index.js para ajustes más específicos según las necesidades de tu proyecto.

# Envío y Recepción de Imágenes en Base64
# Los endpoints que aceptan imágenes permiten un campo imageBase64 en el cuerpo de la solicitud. Asegúrate de enviar la imagen codificada en base64 como parte de la solicitud JSON.

# Registro de Solicitudes
# Cada solicitud y respuesta es registrada automáticamente en un archivo log.txt en el directorio raíz del proyecto. Revísalo para obtener detalles sobre las solicitudes procesadas.