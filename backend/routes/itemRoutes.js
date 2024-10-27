const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Rota para obter todos os itens
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para adicionar um novo item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para deletar um item pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        res.json(deletedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;