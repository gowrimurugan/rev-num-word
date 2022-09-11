let num = prompt("enter the number");
let temp = num;
while(temp>=1){
    let lastDigit = temp % 10;
    temp = (temp - lastDigit)/10;
    if(lastDigit == 1){
        console.log("one")
    }else if(lastDigit == 2){
        console.log("two")
    }else if(lastDigit == 3){
        console.log("three")
    }else if(lastDigit == 4){
        console.log("four")
    }else if(lastDigit == 5){
        console.log("five")
    }else if(lastDigit == 6){
        console.log("six")
    }else if(lastDigit == 7){
        console.log("seven")
    }else if(lastDigit == 8){
        console.log("eight")
    }else if(lastDigit == 9){
        console.log("nine")
    }else {
        console.log("zero")
    }
}