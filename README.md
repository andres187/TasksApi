Tareas (tasks) personales, este debe permite las
siguientes operaciones: Agregar, Listar, Editar y Eliminar. Con los siguientes campos:
● Descripción de la tarea (description) (Texto)
● Autor de la tarea (author) (Texto, por ahora)
● Fecha de creación (createdAt) (Fecha y hora, calculada a la hora de crear el
contenido)
● Fecha de edición (updatedAt) (Fecha y hora, actualizada a la hora de editar el
contenido)


1. Para descargar las librerias debemos digitar el comando:
  <code>npm install</code>
Y este descargará todas las librerias necesarias para el API

2. Renombramos el archivo .env.example a .env

3. Corremos nuestra API:
  npm run dev
  
4. http://localhost:3000/api/tasks/ ingresamos a esta dirección.

5. Para crear una nueva tarea nos dirigimos al POSTMAN e ingresamos la dirección anterior pero de opción colocaremos POST:
    Ingresaremos lo siguiente:
    {
      "description": "sasa"
    }
