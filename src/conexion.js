const express = require("express");

const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database: "avatar_db",
    user: "root",
    password: ""
});

const app = express();

app.set("view engine", "ejs");

