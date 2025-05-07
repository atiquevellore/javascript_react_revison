//
/*
defn
throttling is a technique in programming that limits execution a function once in every specified interval
*/

function throttle(fn,limit) {
    let flag
    return function(){
        if(flag) {
            fn.apply(this, args)
            setTimeout(() => flag= false, limit)
        }
    }
}