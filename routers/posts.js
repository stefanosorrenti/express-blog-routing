const express = require('express');
const router = express.Router();
const macchine = [
  { id: 1, marca: "Fiat", modello: "500", cavalli: 70, prezzo: 15000 },
  { id: 2, marca: "Volkswagen", modello: "Golf", cavalli: 110, prezzo: 25000 },
  { id: 3, marca: "BMW", modello: "Serie 3", cavalli: 184, prezzo: 42000 },
  { id: 4, marca: "Audi", modello: "A4", cavalli: 190, prezzo: 45000 },
  { id: 5, marca: "Mercedes", modello: "Classe A", cavalli: 136, prezzo: 35000 },
  { id: 6, marca: "Ford", modello: "Focus", cavalli: 125, prezzo: 23000 },
  { id: 7, marca: "Toyota", modello: "Yaris", cavalli: 116, prezzo: 22000 },
  { id: 8, marca: "Tesla", modello: "Model 3", cavalli: 283, prezzo: 48000 },
  { id: 9, marca: "Hyundai", modello: "i30", cavalli: 120, prezzo: 21000 },
  { id: 10, marca: "Peugeot", modello: "208", cavalli: 100, prezzo: 20000 }
];

//INDEX
router.get('/', (req, res) => {
    res.json(macchine)
});

//SHOW
router.get('/:id', (req, res) => {
    const post = macchine.find(macchina => macchina.id === parseInt(req.params.id))
    if(post) {
        res.json(post)
    } else {
        res.send('Post non trovato')
    }
    
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
    const idString = req.params.id
    const removedPost = macchine.find(macchine => macchine.id === parseInt(idString))

    if(removedPost) {
        res.json(removedPost)
    } else {
        res.send('Non riesco a trovare il posta da eliminare')
    }
    
});

module.exports = router;