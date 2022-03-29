
const lowNum = parseInt(prompt('Enter lower number: '));
const highNum = parseInt(prompt('Enter higher number: '));
console.log(`The prime numbers between ${lowNum} and ${highNum} are:`);
for (let i = lowNum; i <= highNum; i++)
 {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) 
    {
        console.log(i);
    }
}