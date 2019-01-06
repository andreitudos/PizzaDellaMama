let loged = false;
let users = [
    { userId : 1, nome: "andrei", password: "abc123", email:"andrei@gmail.com"},
    { userId : 2, nome: "user1", password: "abc123", email:"user1@gmail.com"},
    { userId : 3, nome: "user2", password: "abc123", email:"user2@gmail.com"},
    { userId : 4, nome: "user3", password: "abc123", email:"user3@gmail.com" }
  ];


//GET user
function getUser(usr, pwd){
  let user;
    for (let item of users) {
      if (item.nome === usr && item.password === pwd) {
       user =item;
      }
    };
return user;
};

//Login
function login(){
  username = document.getElementById('uname').value;
  password = document.getElementById('psw').value;

  let user = getUser(username, password);
    //alert(user);
  if(user){
    sessionStorage.setItem(user.userId, user.nome, user.email);
    loged = true;
  }
 alert(sessionStorage.getItem(userId));
};

function createUser(...arg){
  
}