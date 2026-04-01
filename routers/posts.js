const express = require('express');
const router = express.Router();


//INDEX
router.get('/', (req, res) => {
    res.send('Lista dei post')
});

//SHOW
router.get('/:id', (req, res) => {
    res.send(`Dettagli del post ${req.params.id}`)
});

//STORE
router.post('/', (req, res) => {
    res.send('Crea un nuovo post')
});

//UPDATE
router.put('/:id', (req, res) => {
    res.send(`Modifica l'intero post ${req.params.id}`)
});

//MODIFY
router.patch('/:id', (req, res) => {
    res.send(`Modifica una parte del post ${req.params.id}`)
});

//DESTROY
router.delete('/:id', (req, res) => {
    res.send(`Elimina il post ${req.params.id}`)
});

module.exports = router;