/*
defn
A function bundled together along with lexical scope(parent scope) forms a closure
*/

function a() {
    let x 
    const y = 20;
    var z 
    function b() {
       x = "Hello from the parent fn b "
       z = "zeee variable"
        function c() {
            console.log("x varibale from the nested function", x)
            console.log("const varibale can  also accessed", y)
            console.log("var varibale can  also accessed", z)

        }
        c()
    }
    b()
}
console.log(a())

function add(a){
    return function(b) {
        return a+b;
    }
}

console.log("currying",add(10)(9))