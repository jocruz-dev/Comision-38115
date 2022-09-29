function FetchData(aux){
    const data = new Promise((resolve, reject)=>{
        if(aux){
            setTimeout(() => {
                resolve({
                    items: [1,2,3,4,5,6,7,8,9],
                    img: "https://img10.naventcdn.com/avisos/18/00/64/62/64/79/720x532/325980812.jpg"
                })
            }, 2000);
        }
        else{
            setTimeout(() => {
                reject({
                    error: "Error en resolver"
                })
            }, 2000);
        }
    })
    return data
}

export default FetchData