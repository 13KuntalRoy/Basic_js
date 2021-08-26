const student ={
    name:'John',
    age:23,
    isActive:true
}

const studentObjToString =JSON.stringify(student)
console.log(typeof studentObjToString );


// localStorage.setItem('student',studentObjToString)
const toJSONStudent = JSON.parse(studentObjToString)