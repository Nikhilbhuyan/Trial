const zod= require('zod');


/* i/p types for post req
{
title:string,
description: string
}

i/p types for put req
{
id: string
}
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports={
    createTodo: createTodo,
    updateTodo: updateTodo
}