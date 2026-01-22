/**
 * conditional 2
 * 
 * switch condition
 * 
 * switches variable with value as a case
 */


let x =  10;
switch (x){
    case 10:
        console.log("Value is 10");   // problem is if 1st is matched it will execute rest of the codes so use break
        break;
    case 20:
        console.log("Value is 20");
        break;
    case 30:
        console.log("Value is 30");
        break;
    default:
        console.log("Unknown value");
}