const express = require("express");
const router = require("./src/routes/routes");

const app = express();
app.use(express.json())
app.use(router)

app.listen(4000,()=>{
    console.log("Aplicação rodando na porta 4000");
});