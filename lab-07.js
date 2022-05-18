/*
    CIT 281 Lab7 
    Name: Catherine Nolan
*/

//CustomeError class
class CustomError extends Error {
    constructor (args) {
        super(args); 
        this.name = 'CustomError';
    }
}

//throwGenericError() function 
function throwGenericError () {
    throw new Error ('Generic error'); 
}

//throwCustomError() function 
function throwCustomError () {
    throw new CustomError ('Custom error'); 
}

//try...catch...finally --> calls throwGenericError()
try {
    console.log('Force generic error'); 
    console.log('Generic error try block'); 
    throwGenericError(); 
} catch (err) {
    console.log(`${err.message} catch block`); 
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("Generic error finally blocked")
}

//try...catch...finally --> calls throwCustomError()

try{
    console.log('Force custom error');
    console.log('Custom error try block');
    throwCustomError();
} catch (err){
    console.log(`${err.message} catch block`);
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log('Custom error finally block');
}
