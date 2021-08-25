const grade=(current ,tottal)=>{
    let num=(current/tottal)*100
    let grade='';
    if(num >= 90){
        grade ='A'
    }
    else if(num>=80){
        grade ='B'
    }
    else if(num>=60){
        grade ='C'
    }
    else if(num>=40){
        grade ='D'
    }
    return grade;
}

console.log(grade(654,700));