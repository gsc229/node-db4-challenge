const express = require('express');


const Recipes = require('./recipeModel');
const router = express.Router();


router.get('/', (req, res) => {
  Recipes.find()
    .then(recs => {
      res.status(200).json(recs)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
})


router.get('/:id', (req, res) => {
  const id = req.params.id
  Recipes.findById(id)
    .then(recp => {
      res.status(200).json(recp)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe by that id' });
    });
})

router.get('/:id/shopping-list', (req, res) => {
  const rec_id = req.params.id;
  Recipes.getShoppingList(rec_id)
    .then(shopList => {
      res.status(200).json(shopList)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shoping list by that recipe id' });
    });
})

router.get('/:id/instructions', (req, res) => {
  const rec_id = req.params.id;
  Recipes.getInstructions(rec_id)
    .then(insts => {
      res.status(200).json(insts)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions by that recipe id' });
    });


})


module.exports = router;
