/**
 * test
 */

let userRole = 'admin';
let isAuthenticated = true;
let userAge = 20;

if(Boolean(isAuthenticated) == false){
    console.log("Please Log in");
}
else if(Boolean(isAuthenticated) == true && String(userRole) == 'admin'){
    console.log("Welcome to the dashboard");
}
else if(Boolean(isAuthenticated) == true && String(userRole) != 'admin' ){
    console.log("Access Denied");
}