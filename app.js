const express = require('express');
const app = express();


const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/");
//console.log(archivo.escribe());
//console.log("se escribio el archivo");

app.use(express.static(__dirname + "/public"));
/*app.get('/',(req,res)=>{
    res.send('mi respuesta desde express')
})*/



app.get('/', (req, res) => {
    res.render("pagina");
});
/*
app.get('/', (req, res) => {
    res.render("pagina", { numero: "mi titulo dinamico" })
});
*/
/*
app.get('/servicio',(req,res)=>{
    res.send('mi respuesta desde servicio')
})
*/
/*
app.get('/servicios', (req, res) => {
    res.render("servicios", { tituloServicios: "este es un mensaje dinamico de servicios" })
});*/



/*
app.use((req,res)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
})
*/
app.use((req, res) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "titulo del sitio web"
    })
});
app.listen(port, () => {
    console.log('servidor a su servicio en el puerto ', port)
});