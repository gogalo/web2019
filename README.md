# Proyeto MEAN Cetic - 2019

Aplicación cms desarrollada con el stack MEAN.

- [Backend](/backend)
- [Frontend](/frontend)

> __Antes de nada tendremos que tener instalado NodeJs, MongoDB y Angular CLI en nuestro sistema__
> [NodeJs](https://nodejs.org)
> [Angular CLI](https://cli.angular.io/)
> [MongoDB](https://docs.mongodb.com/manual/installation/)

## Instalación del Backend y el Frontend

__Clonar el repositorio__
``` bash
$ git clone https://github.com/gogalo/web2019.git
```
__Backend__
Inslatalar dependencias y arrancar aplicación. _(Para que funcione levantar __MongoDB__ en el puerto __27017__)_
``` bash
$ cd backend
$ npm install
$ npm run dev
```
La aplicación está disponible en _http://localhost:3000_

__Frontend__
Instalar las dependencias y arrancar la aplicación.
``` bash
$ cd ../frontend/webangular/
$ npm install
$ ng serve
```
La aplicación está disponible en _http://localhost:4200_

La parte del backend (API RestFull) está desarrollada con NodeJs y servidor express. La documentación está desarrollada con swagger, urls de acceso:
- http://localhost:3000/api/v1/[usuarios | login | registro | usuario/cambiar-estado]
- http://localhost:3000/api/v1/docs

## Requisitos del proyecto
#### Unidad 03 - Backend API RESTful
>Notas generales:
>Nota los modelos de datos son los utilizados en el Ejericio anterior
>Determinar los datos iniciales que debe tener la BBDD al iniciar la apliación por primera vez
>Excepto el login y el registro de usuarios todo lo demás debe accederse mediante token
>Deberemos realizar las pruebas de funcionamiento del API de manera automatizada

__Usuarios__
- Registro/Login/Logout en base a un token API Bearer **Registro y login hechos**
- CRUD RestFul de usuarios **hecho**
- Activar o desactivar un usuario en base a su ID **hecho**
- Consultar usuarios activos o no **hecho**

__Publicaciones__
- Listar y ver publicaciones públicas publicadas (público) **pendiente**
- Crud RestFull de Publicaciones **pendiente**
- Consultar los tipos de publicación disponibles (guardar los campos mínimos: PN) **pendiente**
- CRUD publicaciones por tipo de publicación **pendiente**
- Modificar si una publicación está pública o no **pendiente**
- Modificar si una publicación está publicada o no **pendiente**
- Consultar la publicación principal de cada tipo **pendiente**
- Consultar las publicaciones principales públicas y publicadas **pendiente**

#### Unidad 04 - FrontEnd
>Notas generales
>Nota el api a consultar será el realizado con el ejercicio anterior
>Excepto el login y el registro de usuarios todo lo demás debe accederse mediante token, por lo que lo primero que deberíamos ver la primera vez que entramos en la app es registro y/o login
>También deberíamos poder ver la parte pública de la web
>Sólo deberíamos poder acceder al contenido privado mediante el token
>La aplicación debera tener app shell fijo: sidebar, toolbar, navegación y el cotnenido serán componentes cargados con rutas
>Deberemos realizar las pruebas de funcionamiento de la app de manera automatizada

__Usuarios (privada)__
- Registro/Login/Logout para tener acceso al API restringido (publica) **Registro solo el formulario, login hecho, logout pendiente**
- CRUD RestFul de usuarios **pendiente**
- Activar o desactivar un usuario en base a su ID **pendiente**
- Consultar usuarios activos o no **pendiente**

__Publicaciones (privado)__
- Cargar la página principal y el menú prinicipal públicos y privados **Maquetación varias partes del layout (cabecera, menu, pie). Página home publicaciones destacadas (mock) en la home**
- Listar u ver publicaciones publicadas públicas (publico) **pendiente**
- Crud RestFull de Publicaciones **pendiente**
- Consultar los tipos de publicación disponibles (guardar los campos mínimos: PN) **pendiente**
- CRUD publicaciones por tipo de publicación **pendiente**
- Modificar si una publicación está pública o no **pendiente**
- Modificar si una publicación está publicada o no **pendiente**
Consultar la publicación principal de cada tipo **pendiente**
