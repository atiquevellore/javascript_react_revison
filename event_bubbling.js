// event bubbling

// event bubbling is a process when an event is occurred it propogates the from the child to parent 

document.getElementById("grandparent").addEventListener("click", ()=> {
    console.log("grand div clicked")
}, true)

document.getElementById("parent").addEventListener("click", (event)=> {
    console.log("parent  div clicked")
},true)

document.getElementById("child").addEventListener("click", ()=> {
    console.log("child div clicked")
},true)


//event tricking(capturing phase) up to down