const user1 = {
    username: "Sparsh",
    prise: 566,

    welcomeMessage :function(){
        console.log(`${this.username}, welcome to VTOP`);   // this keyword is 
        
    }
}

user1.welcomeMessage();
user1.username = "Karan";
user1.welcomeMessage();



// in a browser console the global object is window, so in a browser console, this refers to the window object.
// in a node console the global object is global, so in a node console, this refers to the global object.
// in a function, this refers to the global object.
// in a method, this refers to the object that the method is called on.
// in a constructor function, this refers to the new object that is created.




//------------------------------------------------------------------------------------------------------------------------------------


function trial(){
    console.log(this);
    
}

trial();



// const myself = () => {
//     let us = "Sparsh"
//     console.log(this.us);
// }



// myself()



// Arrow functions do not have their own this. They inherit this from their surrounding lexical scope (i.e., where the arrow function is defined).

const addThree = (num1,num2,num3) => (num1 + num2 + num3)  // implesit return


console.log(addThree(30 , 30 , 40));  //100
