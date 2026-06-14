const express = require("express");
const Category = require("../models/category");

const categoryRouter = express.Router();

categoryRouter.post("/api/categories", async (req, res) => {
    try {
        const {name,image, banner} = req.body;
        const category = new Category({name,image,banner});
        await category.save();
        res.status(201).json(category);
    }catch (e) {
        res.status(400).json({message: e.message});
    }
});
module.exports = categoryRouter;