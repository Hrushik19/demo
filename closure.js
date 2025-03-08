function outer(name){
    var message="welcome"
    function inner(){
        console.log(`${message} to ${name}`)
    }
    return inner
}

let inn=outer("hrushik")
inn()
