// async function myFn(){
//     throw new error("promise rejected");
//     // return "aashir"
// }

// const res = myFn();


// console.log(res);


const myPromise = new Promise(
    (resolve,reject)=>{
        const btn1 = document.getElementById("btn1");
        const btn12= document.getElementById("btn2");

        btn1.addEventListener(
            "click",()=>{
                resolve("promise resolved");
            }
        )
        btn12.addEventListener(
            "click",()=>{
                reject("promise rejected");
            }
        )
    }
)

myPromise.then(
    (res)=>{
        console.log(res);
    }
).catch(
    (err)=>{
        console.log(err);
    }
)