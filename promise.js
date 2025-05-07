/* 
defn

A promise is Objectual respresentation of Eventual Completion or failure of Asynchronous operation

*/

let p1 = new Promise((reject , resolve)=>{
   // resolve("promise resolved")
    resolve("p1 resolved")
})

let p2 = new Promise((reject , resolve)=>{
    // resolve("promise resolved")
     resolve("p2 resolved")
 })

 let p3 = new Promise((reject , resolve)=>{
    // resolve("promise resolved")
     resolve("p3 resolved")
 })


 Promise.all([p1,p2,p3]).then(( res) => console.log(res)).catch((error) => console.log(error))



p2.then((data)=> console.log("promise data", data)).catch((error) => console.log(error))


//fecth is simlar to promise function


//Async and await similar to promise

async function Hello() {
    let  response = await fetch("")
    let data = await response.json()
}

//Event loop is a mechanism that manages asynchronous operations . it is a loop that monitor the callback queue and callstack 


