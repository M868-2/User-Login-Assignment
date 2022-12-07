// FUNCTION
document.getElementById("btn").addEventListener("click" , btnclicked);

function btnclicked () {
// USER LOGIN 
let user = document.getElementById("username").value.toLowerCase();
let pass = document.getElementById("password").value; 

console.log(user);
console.log(pass);

// IF STATEMENTS
    if (user === "admin" && pass === "1234") {
        alert("login successful");
    } else if (user !== "admin") {
        alert("Invalid username");
    } else {
        alert("invalid password");
    } 
}