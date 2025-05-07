let obj ={
    firstname: "atique",
    lastname: "bokhari",
    printFullName: function(hometown, state, Age)  {
        console.log(this.firstname + this.lastname + "  from" +
			hometown +
			" " +
			state +
			" " +
			Age)
    }
}

//call
/*
defn :-
call is a method that allows you invoke a function with specific context (this)

example:-
*/

//let check = obj.printFullName.call({firstname: 'atique', lastname: 'bokhari'})

/*
apply is similar to bind function but it accepts array of arguments

example
*/
function greeting( greeting, ...args) {
    console.log("args", args)
}

//let check1 = greeting.apply({name: "bob"},["Hi", "Iam", "Atique"])

// bind creates copy of the function and that can be invoked later

let bind = obj.printFullName.bind({firstname: 'atique', lastname: 'vellore'})
//bind()

//polyfill for bind method
Function.prototype.mybind = function (...args) {
	let ref = this;
	let params = args.slice(1);
	return function (...args2) {
		ref.apply(args[0], [...params, ...args2]);
	};
};

Function.prototype.myBindpersonal  = function(args){
    let ref  = this;
    let params = args.slice(1)
    return function() {
        ref.apply(args[0], [...params,...args2])
    }
}

let polyfillbind = obj.printFullName.mybind({firstname: 'atique', lastname: 'vellore'}, "Hospet", "Karnataka");
polyfillbind("53");
