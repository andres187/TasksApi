Tareas (tasks) personales, este debe permite las
siguientes operaciones: Agregar, Listar, Editar y Eliminar. Con los siguientes campos:

● Descripción de la tarea (description) (Texto)
● Autor de la tarea (author) (Texto, por ahora)
● Fecha de creación (createdAt) (Fecha y hora, calculada a la hora de crear el
contenido)
● Fecha de edición (updatedAt) (Fecha y hora, actualizada a la hora de editar el
contenido)


1. Para descargar las librerias debemos digitar el comando:
  <br>
  <code>npm install</code>
  <br>
Y este descargará todas las librerias necesarias para el API

2. Renombramos el archivo .env.example a .env

3. Corremos nuestra API:
<br>
  <code>npm run dev</code>
  
4. http://localhost:3000/api/tasks/ ingresamos a esta dirección.

5. Para crear una nueva tarea nos dirigimos al POSTMAN e ingresamos la dirección anterior pero de opción colocaremos POST:
    Ingresaremos lo siguiente:
    
    <p>
    {      
      </br>
      "description": "Lo que queramos",
       <br>
      "author": "Andres Bolivar"
       <br>
    }
  </p>
    
6. Para leer una tarea en especifico nos dirigimos a http://localhost:3000/api/tasks/1 y podremos ver esa tarea.

7. Para actualizar una tarea en el POSTMAN escogemos PUT http://localhost:3000/api/tasks/1 y mandamos el id a actualizar junto con su información:
    <p>
    {      
      </br>      
      "description": "Lo que queramos updated",
      <br>
      "author": "Andres Bolivar updated"
    <br>
    }
  </p>
8. Y para eliminar una tarea en el POSTMAN escogemos DELETE http://localhost:3000/api/tasks/1 y mandamos el id a eliminar.
