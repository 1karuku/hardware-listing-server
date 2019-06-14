require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
  const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
 });

 app.get("/api/materials", (req, res) => {
     pool.query("SELECT material_id, material_name FROM materials",
      (error, rows) => {
         if (error) {
             return res.status(500).json({ error });
         }

         res.json(rows);
     });
 });

  app.listen(9000, () => console.log("App listening on port 9000"));