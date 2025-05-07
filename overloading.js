//fn overloading same function name with different arguments but it does not support


function add(a,b){
    return a+b;
}

function add(a,b,c)
{
    return a+b+c
}

console.log("additon of two number 7,8", add(7,8))
console.log("additon of three number 7,8", add(7,8,9))

// fn overriding

class Car{
   constructor(){

   }
    engine(){
        return "engine working"
   }
}

class nano extends Car {

    engine() {
        return "nano petrol engine"
    }
}

n1 = new nano();
console.log(n1.engine())