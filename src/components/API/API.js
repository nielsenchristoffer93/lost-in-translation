import Startup from '../Startup/Startup';

/*export const postData = (stringToTranslate) => {
    fetch('http://localhost:3000/translations', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user_id": "Christoffer",
        "phrase": stringToTranslate,
        "isDeleted": false

        //name: userName
      })
    })
      .then((response) => {
        //do something awesome that makes the world a better place
        console.log(response)
      });
  }
/*
export const getUsers = (method) => {
    let users = []
    fetch('http://localhost:3000/users')
        .then(res => {
            return res.json();
        })
        .then(data => users = data)
        .then(function(users){return users})
        .then(method)


}
*/
export const getUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    return (data);
}
getUsers().then(users => {
    setUsers(users);
}).then(checkForUser());

export const postUser = (userName) => {
    fetch('http://localhost:3000/users', {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName
            //name: userName
        })
    })
        .then((response) => {
            //do something awesome that makes the world a better place
            console.log(response)
        });
        
}
