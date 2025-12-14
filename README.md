# 🚀 Proyecto Final Node.js

## 💻 Tecnologías Clave

| Componente | Tecnología | Notas |
| :--- | :--- | :--- |
| **Backend** | Node.js / Express.js | Framework principal para la construcción de la API RESTful. |
| **Base de Datos** | **Firestore (Google Cloud)** | Base de datos NoSQL para persistencia de datos. |
| **Lenguaje** | JavaScript | Lenguaje de desarrollo principal. |
| **Despliegue** | Vercel | Configuración lista para despliegue serverless (`vercel.json`). |

## 📦 Estructura del Proyecto

El proyecto sigue una estructura limpia y modular, separando responsabilidades:

```
proyecto_final_nodejs/
├── src/                # Lógica principal de la aplicación
│   ├── api/            # Definición de rutas (Routers)
│   ├── controllers/    # Lógica de negocio (manejo de peticiones HTTP)
│   ├── models/         # Definición/estructura de los datos (schemas si aplica)
│   └── services/       # Módulos de interacción directa con Firestore.
├── middleware/         # Funciones de intercepción (ej: validación de datos, manejo de errores).
├── index.js            # Punto de entrada y configuración del servidor.
├── .env.example        # Plantilla de variables de entorno (incluye credenciales de Firestore).
└── package.json        # Dependencias y scripts de ejecución.
```

## ✨ Librerías Esenciales

Las librerías más importantes utilizadas en este proyecto son:

| Módulo | Categoría | Propósito |
| :--- | :--- | :--- |
| **express** | Core | Framework para el servidor web y manejo de rutas. |
| **firebase** | Base de Datos | SDK oficial para interactuar con Firestore desde el servidor. |
| **dotenv** | Configuración | Carga variables de entorno (claves de API, configuración de Firestore, etc.). |
| **jsonwebtoken** | Seguridad | Módulo probable para manejo de sesiones o autenticación. |
| **cors** | Middleware | Habilita el Intercambio de Recursos de Origen Cruzado. |

-----

### ⚙️ Instalación y Ejecución

1.  **Clonar el repositorio:** `git clone [URL_DEL_REPO]`
2.  **Instalar dependencias:** `npm install`
3.  **Configuración de entorno:** Crea un archivo `.env` y añade las variables necesarias (incluyendo las credenciales de Firestore, si no se usan variables de entorno directas).
4.  **Iniciar el servidor:** `npm start`