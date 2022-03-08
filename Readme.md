# TODO APP

As the name suggests, Todo app is a task app.
It has the features of creating, searching, deleting, completing, editing your To dollars.
creation: you can create new todos with or without pictures.
search features: search by name and search by date are available.
delete: you can delete a todo that you have completed.
edit: you can re-edit an incorrectly created todo.

# Deployment note:

    - It does not commit to database and media . These must be created by you.

        + For the media folder: -> cd appback -> mkdir media

        + For database (mongo db ) -> mongo shell -> " use database1" -> db.createCollection("database1")

            +For create different database: appback ->Model ->Todo.js ->mongoose.connect(<host>/<new db Name>)

# For Future Versions

- For future versions: user creation and user operations.
- Fixed better validation processes.
- Css.

## Project setup

```
cd appback
npm install

and
cd appfront
npm install
```

### Compiles and hot-reloads for development

```
for backend :
    cd appback
    npm run dev
for frontend:
    cd appfront
    npm run serve
```

### Compiles and minifies for production

```
for frontend:
    cd appfront
    npm run build
```

### Lints and fixes files

```
npm run lint
```

## Note

If you run two apps(appback/appfront) on the same server. If enev is used between ports, you may experience connection problems if your port is closed. You have to choose different servers for this. If you use process.env.PORT you will have communication problems between api.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
