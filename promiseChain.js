function fetchUserData(userId){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const user={ id: userId , name:"karthik" , type:'premium'};
            resolve(user);
        },1000);
    });
}

function fetchUserSettings(userType){
    return new Promise((resolve,reject) => {
        console.log(`fetching user settings ${userType}`)
        const settings=userType==='premium'
        ? {theme:'dark' , notification:true , accessLevel:'high'}
        : {theme:'light' , notification:false , accessLevel:'low'}
        resolve(settings)
    })
}

fetchUserData()
.then(user => fetchUserSettings(user.type))
.then(details => {console.log(details)})
.catch(error => {console.log(error)})