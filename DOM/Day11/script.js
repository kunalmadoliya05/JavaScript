let obj = [{ 
    user : "Manuu bby" , 
    age : "20"
},{
    user : "kunal",
    age : "20"

}]

var user1 = localStorage.getItem("user")

let users = JSON.stringify(obj)

console.log(users);
