function receivesAFunction (Spy){
    Spy()
}

function Spyer (){
    console.log("Sup g")
    return
}


function fn (){
    return Spyer;
}

function returnsANamedFunction(){
    return fn()
}


function returnsAnAnonymousFunction(){
    return function (){
        console.log("Hey whats up")
    };
}

 
