/*
A abilty of a function to pass function as argument to 
another function and also return  a function from another function */

//example

//setTimeout is used to perform a task after certain duration
setTimeout(()=> {
   console.log("Hello world after 10 sec")
},10)

//setInterval is used to perform a task regularly after a certain interval
// setInterval(()=> {
//     clearInterval()
//     console.log("Hello world from setInterval after 10 sec")
// },  10)

//callback hell

//defn:-  Inversion  of control - lossing a control of a function when it is passed as an argument to another function  we do not that call back function might be called or not

// callback fn example:-
setTimeout(() => {
    console.log("first task")
    setTimeout (()=> {
        console.log("Second task")
        setTimeout(()=> {
            console.log("third task")
        },10)
    },20)
},30)