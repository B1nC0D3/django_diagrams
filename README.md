# Одностраничник для отрисовки диаграмм
Одностраничный сайт для отрисовки диаграмм по данным и бд в Django.
Есть настроенная админка. Рендеринг диаграмм происходит с помощью JS библиотеки ChartJS.

---
## Запуск приложения
Перед запуском сервера необходимо наполнить .env-файл по аналогии с примером в репозитории

В корне проекта выполните
```
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
```

Далее, в корне django-приложения выполните
```
    python manage.py migrate # для запуска основного приложения
    python manage.py cratesuperuser
    python manage.py runserver
```
Приложение будет доступно по ссылке `http://127.0.0.1:8000`

 ---

## Технологии

- Python 3.10
- Django 4.2
- Bootstrap
- ChartJS