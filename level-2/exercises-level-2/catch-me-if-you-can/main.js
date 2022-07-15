//#1a
function sum(x, y){
    //check data types first and throw error
    try{
        if(x !== Number){
            throw typeof(x)
        }
        if(y !== Number){
            throw typeof(y)
        }
    } catch(err){
        console.log(err)
    } finally{
        console.log("not working")
    }
    return x + y;
}
console.log(sum(1, 2))
//#1b
try{
    function sum(x, y){
        return x + y;
    }
    throw sum(1, 2)
} catch(err){
    console.log(err)
} finally{
    console.log(sum)
}
//#2a
var user = {username: "sam", password: "123abc"};
/*function login(username, password){
  if(username === "sam" && password === "123abc"){
      console.log("login succesful")
  } 
}*/
//#2b
try{
    function login(username, password){
        if(username === "sam" && password === "123abc"){
            throw "login successful"
        }
        if(username !== "sam" && password !== "123abc"){
            throw "not succesful"
        }
}} catch(err){
    console.log(err)
} finally{
    console.log("login tried")
}
console.log(login("sam", "123abc"))
console.log(login("jeff", "122"))