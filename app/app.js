

const users = [];

users.push();

document
  .getElementById("signupform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("signupemail").value;
    let password = document.getElementById("signuppassword").value;
    let messageElement = document.getElementById("signupmessage");
    let status = "active";
    let date = new Date();
    let i = 1;
    let uID = i;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      messageElement.style.color = "Tomato";
      messageElement.textContent = "your email already exists";
    }
    if(password.length < 6 ){
      messageElement.style.color = "Tomato";
      messageElement.textContent = "your password must be more than 6";
    }
    else {
      users.push({ email, password, uID, status, date });
      uIF = uID +1;
      document.getElementById("signup-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
      document.getElementById("signup-form").reset();
console.log("users", users)
    }
  });
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const messageElement = document.getElementById("login-message");

    const userFound = users.some(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      document.getElementById("todosPage").style.display = "block";
      document.getElementById("page").style.display = "none";
      event.preventDefault();
      let todos =[];
      const  createTodo = () =>{
        event.preventDefault();
        const title= document.getElementById("title").value
        const discription = document.getElementById("discription").value
        const date = document.getElementById("date").value
        let newtodo= {
          title: title,
          description :discription,
          date :date,
          status: "inCompleted",
          createdAt: new Date(),
          id: Math.random().toString(36).slice(2),
          user_id: uID,
        }
        todos.push(newtodo)
        console.log("todos", todos)
      }

    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "User not found or incorrect password";
    }
  });

function showLogin() {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

function showSignUp() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
}
const showTable=()=>{
  let srNo=1;
  document.getElementById("show-output").innerHTML=""
  let status;
  todos.forEach (element => {
      
      document.getElementById("show-output").innerHTML+=`<tr><td>${srNo++}</td> <td>${element.title}</td> <td>${element.date}</td> <td>${element.id}</td> <td>${status}</td> </tr>`})
}

function clearOutput(){
    document.getElementById("show-output").innerHTML=""
}

