const express = require('express');
const router = express.Router();
const Todo = require("../models/todo");

router.get('/', async (req,res) => {
    const todos = await Todo.Todo.find();
    res.json(todos)
})

router.get('/:id', async(req,res) => {
    try{
        const todoid = await Todo.Todo.findById(req.params.id)
        res.json(todoid)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const todo = new Todo.Todo({
        title: req.body.data.title,
        description: req.body.data.description,
        date: req.body.data.date
    })

    try{
        const t1 =  await todo.save() 
        res.json(t1)
    }catch(err){
        console.log(err,"errpr");
        res.send('Error')
    }
})

router.put("/:id", async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.params.id,"params")
        const todo = await Todo.Todo.findById(req.params.id);
        await todo.updateOne({ $set: req.body.data });
        res.status(200).json("the post has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router