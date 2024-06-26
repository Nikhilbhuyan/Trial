/*
Todo{
title: string
description: string,
completed: boolean
}
username-nikhilbhuyan17
password-VcB5T3Jcc3X5Viux
mongodb+srv://nikhilbhuyan17:VcB5T3Jcc3X5Viux@cluster0.wwpeuup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/
const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://nikhilbhuyan17:VcB5T3Jcc3X5Viux@cluster0.wwpeuup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

//Schema for our todo
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean

});

const todo = mongoose.model('todos',todoSchema);

module.exports ={
    todo
}