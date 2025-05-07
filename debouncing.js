/*

debouncing is a technique which delays the execution of a function until user stops performing the action for certain period of time

*/

function debounce(fn, delay){

    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,args)
        },delay)
    }
}

debounce(searchhandler, 1000)

function searchhandler(data) {
    getapiresponse(data)
}