# fsf-ft-11-MERN-starter

## Basic Server Setup

1. `touch server.js`
2. `npm init -y`
3. `npm install express mongoose`

## Build the Express App

1. Require express
2. Create an instance of express
3. Set the server PORT to 3001
4. Listen to the PORT
5. Add middleware

```javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
```

6. Add routes

**_Great time to test your server using Postman_**

## Add MongoDB/Monoose to the Server

1. Require mongoose in the server.
2. Setup the mongoose connection
3. Add mongoose config object to the .connect method

```javascript
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
```

4. Add promise .then and .catch for Mongoose connection

## Add React to the App

1. `npx create-react-app client`
2. Add scripts in server package.json

```javascript
    "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
    "start:prod": "node server.js",
    "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
    "client": "cd client && npm run start",
```

3. `npm install if-env`
4. `npm install concurrently nodemon -D`
5. In the client package.json add a proxy:

```javascript
"proxy": "http://localhost:3001",
```

## Deploy to Heroku

1. `git add .` -> `git commit -m `
2. `heroku create`
3. Add three more scripts to server package.json

``` javascript
    "install": "cd client && npm install",
    "build": "cd client && npm run build",
    "heroku-postbuild": "npm run build"
```

4. `git push heroku main`
