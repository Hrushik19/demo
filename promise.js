function userData(){
    let b=true;

    return new Promise((resolve,reject) =>{
        if(b){
            resolve("success")
        }
        else{
            reject("error")
        }
    })
}

userData().then(result => console.log(result));
userData().catch(error => console.log(error)); 