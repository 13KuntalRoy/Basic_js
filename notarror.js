const myTodos ={
    day:'monday',
    meetings:56,
    meetDone:0,
   mymeet:function(u){
      let lol=this.meetings+u
        return `Today i have ${lol} meetings`

    }
}
console.log(myTodos.mymeet(6));