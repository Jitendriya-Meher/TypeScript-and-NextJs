
function calculator( operator:string, num1:number, num2:number) : number|string{

    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if( num2 == 0){
                return "Divided by zero error";
            }
            return num1 / num2;
        default:
            return "please check the inputs";
    }
}

console.log(calculator("+",10,20));
console.log(calculator("-",10,20));
console.log(calculator("*",10,20));
console.log(calculator("/",10,20));
console.log(calculator("/",10,0));
console.log(calculator("?",10,0));