const express = require("express")
require("dotenv").config()
const port = process.env.PORT;
const app = express()
const route = require("./routes/client/index.route")
const database = require("./config/database")
database.connect();


const routeAdmin = require("./routes/admin/index.route")

app.set('views','./views');
app.set('view engine', 'pug');

app.use(express.static("public"));
routeAdmin(app);
route(app);
app.listen(port, ()=> {
    console.log(`App listen on ${port}`)
})