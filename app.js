const express = require('express');
const app = express();
const port = 3000;

//ENTRY POINT APP
app.get('/', function(req, res) {
    res.send('PAGINA PRINCIPALE')
});

//INDEX
app.get('/posts', (req, res) => {
    res.send('Lista dei post')
});

//SHOW
app.get('/posts/:id', (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`)
});

//STORE
app.post('/posts', (req, res) => {
    res.send('Crea un nuovo post')
});

//UPDATE
app.put('/posts/:id', (req, res) => {
    res.send(`Modifica l'intero post ${req.params.id}`)
});

//MODIFY
app.patch('/posts/:id', (req, res) => {
    res.send(`Modifica una parte del post ${req.params.id}`)
});

//DESTROY
app.delete('/posts/:id', (req, res) => {
    res.send(`Elimina il post ${req.params.id}`)
});


//Avvio il mio server e lo metto in ascolto alla mia porta
app.listen(port, () => {
    console.log(`Il server è attivo ed è in ascolto alla porta ${port}`)
})