// const myTodos =['lol', 'mol','chol','jol']

// console.log(myTodos.indexOf('lol'));

const newTodos = [
    {tittle:'Buy bread',
isDone:false},
{tittle:'Buy jol',
isDone:false},
{tittle:'Buy food',
isDone:true}
]
const findTodo =(myTodos,title)=>{
    const index=myTodos.find((todo,index)=>{
        return todo.tittle.toLowerCase()===title.toLowerCase();
    })

    return index
}

console.log(findTodo(newTodos,'Buy jol'));


const things = newTodos.filter((todo=>{
    return todo.isDone === true
}))

console.log(things);




// const index=newTodos.findIndex((todo,index)=>{
//  return todo.title === 'buy jol'
// })

// console.log(index);

// const findTodo=(myTodos,title)=>{
//     const index =myTodos.findIndex((todo,index)=>{
//         return todo.title.toLowerCase()===title.toLowerCase()
//     })
//     return myTodos[index]
// }