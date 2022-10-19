
/**
 * fetch API
 */

const res = fetch("https://cat-fact.herokuapp.com/facts")
let data = {}

res.then((res)=>{
    return res.json()
}).then((value)=>{
    console.log(value);
})
