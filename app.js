const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
//ENTRY POINT APP
app.get('/', function(req, res) {
    res.send('PAGINA PRINCIPALE')
});

app.use('/posts', postsRouter)


//Avvio il mio server e lo metto in ascolto alla mia porta
app.listen(port, () => {
    console.log(`Il server è attivo ed è in ascolto alla porta ${port}`)
})