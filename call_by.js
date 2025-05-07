//call by value

function modifyValue(val) {
    val = 10;
}

let x = 5;
modifyValue(x);
console.log(x); // Output: 5

function modifyObject(obj) {
    obj.value = 10;
}

let myObj = { value: 5 };
modifyObject(myObj);
console.log(myObj.value); // Output: 10