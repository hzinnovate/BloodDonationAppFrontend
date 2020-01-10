async function addPost(obj){
    return new Promise((resolve, reject)=>{
        fetch('https://blood-donation-system-app.herokuapp.com/posts/postRequest', {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                obj
            }),
        }).then(res => res.json())
            .then(re => resolve(re))
    })
}
async function loginUser(email, password) {
    return new Promise((resolve, reject) => {
    fetch('https://blood-donation-system-app.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    }).then(res => res.json())
        .then(re =>{
          if(re.user){
              resolve(re)
          }
          else if(re.message){
              reject(re)
          }
        } )
            
})
}

async function registerUser(obj) {
    return new Promise((resolve, reject) => {
     fetch('https://blood-donation-system-app.herokuapp.com/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: obj.name,
            bloodgroup: obj.bloodgroup,
            email: obj.email,
            password: obj.password
        }),
    }).then(res => res.json())
    .then(re =>{ resolve(re) })
})
}

export {
    loginUser,
    registerUser,
    addPost
}