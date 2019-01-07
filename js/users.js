let users = [
    { userId : 1, nome: "andrei", password: "abc123", email:"andrei@gmail.com"},
    { userId : 2, nome: "user1", password: "abc123", email:"user1@gmail.com"},
    { userId : 3, nome: "user2", password: "abc123", email:"user2@gmail.com"},
    { userId : 4, nome: "user3", password: "abc123", email:"user3@gmail.com" }
  ];

let loged = false;
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
   
    sessionInit(user.userId, user.nome);
  
    document.getElementById("loginform").style.display = 'none';
    alert(sessionStorage.getItem(userId));
  }else{
      alert("Nome do utilizador ou palavra passe invalido");
  };


  function sessionInit(key,sname){
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        sessionStorage.setItem(key, sname);
      } else {
        // Sorry! No Web Storage support..
        console.log("Sorry! No Web Storage support..");
      }
  };


};

function logout(){
   let key= sessionStorage.getItem(user.userId);
    sessionStorage.removeItem(key);
};

function createUser(...arg){
  
};