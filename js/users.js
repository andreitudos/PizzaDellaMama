let users = [
    { userId : 1, nome: "andrei", password: "abc123" },
    { userId : 2, nome: "user1", password: "abc123" },
    { userId : 3, nome: "user2", password: "abc123" },
    { userId : 4, nome: "user3", password: "abc123" }
  ];
let loged = false;



function getUser(usr, pwd){
    
    let user = users.reduce((result, item) => {
        if (item.nome === usr && item.password === pwd) { result = item }
        return result
      }, null)

      console.log(user);
};


