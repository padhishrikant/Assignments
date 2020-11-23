function missingNumber(number){
    n = 0;
    if(n % 2 == 1){
        n = (number * number) + 1;
    }
    else{
        n = (number * number) - 1;
    }
    console.log(n)
}

missingNumber(8)