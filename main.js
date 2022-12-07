// FUNCTION
document.getElementById("btn").addEventListener("click" , btnclicked);

function btnclicked () {
// HTML VARIABLES 
let user = document.getElementById("username").value.toLowerCase();
let pass = document.getElementById("password").value; 

console.log(user);
console.log(pass);

// IF STATEMENTS
    if (user === "admin" && pass === "1234") {
        alert("login successful");
    } else if (user === "----") {
        alert("Invalid username");
    } else if (pass === "----") {
        alert("invalid password");
    } else {
        alert("Login unseccessful");
    }
}