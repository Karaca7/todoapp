# TODO APP

As the name suggests, Todo app is a task app.
It has the features of creating, searching, deleting, completing, editing your To dollars.
creation: you can create new todos with or without pictures.
search features: search by name and search by date are available. // If a date search is desired, it must be filled in completely.
delete: you can delete a todo that you have completed.
edit: you can re-edit an incorrectly created todo.

# Deployment note

    - It does not commit to database . These must be created by you. (Media,committed for Prepared Data)

        + For the media folder: -> cd appback -> mkdir media

        + For database (mongo db ) -> mongo shell -> " use database1" -> db.createCollection("database1")

            +For create different database: appback ->Model ->Todo.js ->mongoose.connect(<host>/<new db Name>)

# To Run With Prepared Data

- Create database named database1.
- Create a foo collection.
- Run the app (appback -appfront) and add new data and close
- Go inside mongodbTodosCollection folder
- Run" mongoimport --jsonArray --db database1 --collection todos --file todos.json "

- Note: images have already been added, database images in .media folder

# For Future Versions

- For future versions: user creation and user operations.
- Fix better validation processes.
- Improving connections between components

## Project setup

```
cd appback
npm install

and
cd appfront
npm install
```

### Run

```
for backend :
    cd appback
    npm run dev
for frontend:
    cd appfront
    npm run serve  //note may not run on first run (for macbook)
```

### Compiles and minifies for production

```
for frontend:
    cd appfront
    npm run build
```

## Note

If you from deployment run two apps(appback/appfront) on the same server. If enev is used between ports, you may experience connection problems if your port is closed. You have to choose different servers for this. If you use process.env.PORT you will have communication problems between api.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<img src="./app images/Add Todo view.png">
<img src="./app images/Find Todo view.png">
<img src="./app images/List Todo view.png">
