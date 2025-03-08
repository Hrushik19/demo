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

async function display(params) {
    let user=await fetchUserData(1);
    let settings=await fetchUserSettings(user.type)
    console.log(settings)
}

display() 
{



    XNXX
}

