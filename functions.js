function sum(a,b){
    console.log(a+b);
};

sum(15,69);

function calculateCartPrice(...num1){     // {...} is rest operator
    return num1;     //[ 200, 400, 800 ]
}

console.log(calculateCartPrice(200,400,800));



function calculateCartPrice2(val1,val2,...num2){     // {...} is rest operator
    return num2;
}



console.log(calculateCartPrice2(500,1000,3000,5000,80000))  // [ 3000, 5000, 80000 ]