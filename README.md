# Music API

Esta api se tiene como fin cargar y mostrar informacion sobre ciertos objetos relacionados al mundo musical
En este repositorio encontraran el codigo distribuido en distintos bloques correspondiente a la API a ejecutar.


## Modelo-Vista-Controlador para cada elemento 

* Artista 
* Banda
* Disco
* Usuario


### Funcionalidades requeridas

**Artistas**


* Agregar un artista ingresando sus datos por POST.(http://localhost:3000/artistas)

<pre><code>{
  "nombre": "Antonio",
  "apellido": "Romano",
  "mini_biografia": "Guitarrista de Hermetica y Malon.",
  "edad": 64,
  "instrumentos": ["Guitarra"]
}
</code></pre>

* Ver todos los artistas de su colección por GET. (http://localhost:3000/artistas)
* Traer uno por su ID (http://localhost:3000/artistas/*inserteelID*).
* Actualizar la información de todos los datos mediante PUT (http://localhost:3000/artistas/*inserteelID*) .
* Actualizar la información de un solo dato mediante PATCH (http://localhost:3000/artistas/*inserteelID*) .
* Eliminar uno mediante DELETE (http://localhost:3000/artistas/*inserteelID*).
* Filtrarlo por nombre del artista y edad mediante GET ( http://localhost:3000/artistas?nombre= *nombre* & *edad* = *numero*).
* Búscar por GET el instrumento (http://localhost:3000/artistas/buscar/instrumentos?instrumentos=*inserteelolosinstrumentos*).
* Búscar por GET el nombre mediante regex (http://localhost:3000/artistas/buscar/nombre?nombre=*nombre*&type=*depende el tipo*).
* Ordenarlo por nombre del artista mediante GET (http://localhost:3000/artistas?*nombre_artista*=*asc/desc*) .

**Discos**

* Agregar uno ingresando sus datos por POST (http://localhost:3000/discos). 

<pre><code>{
    "nombre": "Nuevo Disco",
    "ano": 2021,
    "genero": "rock",
    "banda": *pegar el id de la banda cargada previamente *  
}

</code></pre>

* Ver todos los discos de la colección por GET (http://localhost:3000/discos) .

___Es importante aclarar que si se quiere agregar un disco primero se debe cargar una banda para hacer uso de la base de datos no relacional via MONGODB mediante ref.___

* Traer uno por su ID (http://localhost:3000/discos/*ID del disco*).
* Actualizar la información de un dato o TODOS en particular por PUT (http://localhost:3000/discos/*IDdeldisco*) .
* Eliminar uno por DELETE (http://localhost:3000/discos/*ID del disco*) .
* Filtrarlo por genero y año (http://localhost:3000/discos?genero=*genero*&ano=*año*)  .
* Ordenarlo por nombre por GET (http://localhost:3000/api/discos?orden=asc) .

**Usuarios**

* Agregar uno por POST (http://localhost:3000/usuarios).


* Ver todos los usuarios por GET (http://localhost:3000/usuarios).


<pre><code>
{
        "nombre": "Jose",
        "apellido": "Gonzalez",
        "nombre_usuario": "jose1236",
        "email": "jose@gonza.com",
        "password": "12345"
    }

</code></pre>

* Validar sus datos por POST 

1. ingresamos en el siguiente link (http://localhost:3000/usuarios/ingresar) y le damos como objeto el email y password que ingresamos

<pre><code>
      {
        "email": "jose@gonza.com",
        "password": "12345"
    }
</code></pre>
<pre><code>
{
    "message": "Inicio de sesion correcto",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjhlZTcxYzkwMzU1MWY5NWZiNWY4YyIsImVtYWlsIjoiam9zZUBnb256YS5jb20iLCJpYXQiOjE3NDc1MTI5NjYsImV4cCI6MTc0NzUxNjU2Nn0.vXbR5B9u1jrAUARsKzjkMEJyl60ey1vvlU2rjCpo0S0"
}
</code></pre>

2. Con el token recibido de esos datos autenticamos por GET ambos datos tildando en el header la Authorization: Bearer *TU_TOKEN_JWT*
3. Si esta todo bien nos tendra que aparecer el mensaje con el token correcto



**Bandas (Ref)**
* Agregar banda por POST (http://localhost:3000/bandas ).

<pre><code>
{
  "nombre": "Malon",
  "ano_fundacion": 1995,
  "biografia": "Es una banda de heavy metal argentino"
}

</code></pre>


* Ver todos las bandas de su colección por GET (http://localhost:3000/bandas ).
* Traer una por su ID por GET (http://localhost:3000/bandas/*id* ).
* Actualizar toda la información de una en particular por PUT (http://localhost:3000/bandas/*id* ).

---

## Lenguaje utilizado
* Html 5
* CSS
* JS


## Herramientas y librerias utilizadas
* NodeJS 
* Express
* Mongoose
* Path
* Dotenv
* fileURLToPath

### Dependencias utilizadas
* Bcrypt 
* Dotenv
* Express
* Joi
* Json Web Token
* Mongoose
* Nodemon
* Uuuid

### Dependencias utilizadas
* Bcrypt 
* Dotenv
* Express
* Joi
* Json Web Token
* Mongoose
* Nodemon
* Uuuid


## Archivos de renombre

* App.js
* Index.js
* Validacion.js
* package-lock.json
* package.json

---


### Mis datos del proyecto

- Nombre : Sergio
- Apellido : Diaz
- Materia: Aplicaciones hibridas 
- Profesora: Camila Belen
- [Mi perfil en github](https://github.com/Sergio-21-ops?tab=repositories)