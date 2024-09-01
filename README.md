# mvecom

Ecom

# Steps

Things to install

- Python
- Virtual Environment
- Postgresql
- PyAdmin

# Pip install

Commands

- python3 -m venv venv
- Activate the command (.\venv\Scripts\Activate.ps1)
- pip install django
- django-admin startproject backend_api
- cd backend_api
- python manage.py runserver
-

postgres / admin = Usename & password (POSTGRES)
sadhana / sadhana = Usename & password (Superuser)

# CORS error resolution (settings.py)


# Allow all origins (use with caution)
CORS_ALLOW_ALL_ORIGINS = True

# OR specify allowed origins
CORS_ALLOWED_ORIGINS = [
    "https://bookish-rotary-phone-rv4j7w56vxqcp65r-3000.app.github.dev",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

# Allow credentials (if needed)
CORS_ALLOW_CREDENTIALS = True

# Allow specific headers
CORS_ALLOW_HEADERS = [
    'content-type',
    'authorization',
    'x-csrftoken',
    # other headers you want to allow
]

# Allow methods
CORS_ALLOW_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
]

# Add other settings as needed

