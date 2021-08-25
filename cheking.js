let userEmail ='test@gmail.com'
let password = '12345'

const usercheck=(mystring)=>{
    if((mystring.includes(123)) && (mystring.length > 6)){
        return true
    }
    return false
}

const passcheck=(mystring)=>{
    if((mystring.includes('12@!')) && (mystring.length > 6)){
        return true
    }
    return false
}