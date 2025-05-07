const arr = [1,2,3,4,5]

let ans = arr.map ((item)=>  item *3)

let ansfilter = arr.filter((item) => item < 3)

console.log(ans)
console.log(ansfilter)

let ansreducer = arr.reduce ((acc,currval ) => acc + currval, 0)

console.log(ansreducer)

arr.forEach((item)=> console.log(item))