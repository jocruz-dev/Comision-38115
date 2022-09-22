/**
 * Promesas
 */

// const task = new Promise((resolve, reject)=>{
//     resolve([1,2,3])
// })

// task.then((resultado)=>{
//     console.log("Adentro del then",resultado);
// },(err)=>{
//     console.error("Adentro del error",err);
// }).catch((err)=>{
//     console.log(err);
// })
// .then((resultado)=>{
//     console.log("Segundo then", resultado);
// })

// task.then((res)=>{
//     console.log(res);
// }, (err)=>{
//     console.error(err)
// }).catch((err)=>{
//     console.error(err)
//     return "fallback"
// }).then((res)=>{
//     console.log(res);
// }).then((res)=>{
//     console.log(res);
// })


/**
 * MAP
 */

const arr = [1,2,3,4,5]
console.log(arr);

const arrMap = arr.map((value, index, arr)=>{
    console.log(value,index,arr);
    return value + 1
})

console.log(arrMap);