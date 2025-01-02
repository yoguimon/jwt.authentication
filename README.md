# API JWT Authentication

## Descripción
Este proyecto implementa un sistema de autenticación y autorización basado en **JWT (JSON Web Tokens)** utilizando **Spring Boot** y **Spring Security**. Incluye funcionalidades para registro de usuarios, inicio de sesión y protección de rutas mediante validación de tokens.

## Características
- Registro de usuarios con credenciales seguras.
- Inicio de sesión con generación de JWT.
- Validación de JWT para acceso a rutas protegidas.
- Arquitectura RESTful.

## Tecnologías utilizadas
- **Spring Boot**: Framework principal para construir la aplicación.
- **Spring Security**: Para la gestión de la seguridad y autenticación.
- **JWT**: Para la generación y validación de tokens.
- **Hibernate** y **JPA**: Para la interacción con la base de datos.
- **MySQL**: Base de datos relacional utilizada.

## Endpoints principales

### Autenticación
- `POST /api/v1/auth/register`
  - Registro de un nuevo usuario.
  - **Body**:
    ```json
    {
    	"firstname": "Liliana",
    	"lastname": "Choque",
    	"email": "liliana@gmail.com",
    	"password": "2001"
    }
    ```

- `POST /api/v1/auth/authenticate`
  - Inicio de sesión y generación de un token JWT.
  - **Body**:
    ```json
    {
    	"email": "yoguimon@gmail.com",
    	"password": "1995"
    }
    ```
  - **Respuesta**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### Rutas protegidas
- `GET /api/v1/pruebas-controller`
  - Requiere un token JWT válido en el encabezado **Authorization**:
    ```
    Authorization: Bearer <token>
    ```
![prueba jwt](https://github.com/user-attachments/assets/b17b97ac-5107-4c9a-a616-228318bc63a9)
