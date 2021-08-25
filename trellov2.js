let myTodos ={
    day:'monday',
    meetings:0,
    meetDone:0,
    addmeeting:function(meet,dmeet=0){
        this.meetings=this.meetings + meet
        this.meetDone=dmeet

    },
    meetdone:function(dmeet){
        this.meetDone=dmeet-this.meetDone
    },
    resetday:function(){
        this.meetings=0
        this.meetDone=0
    },
    sunmmary:function(){
        let meetingleft=this.meetings - this.meetDone
        return `you have ${meetingleft} meetingtoday`
    
    }

}


myTodos.addmeeting(12)
myTodos.meetdone(5)
// myTodos.resetday()
console.log(myTodos.sunmmary());
// console.log(myTodos);