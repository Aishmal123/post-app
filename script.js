// console.log("node is working")\
//closure functionb
// function add(){
//     let a=10;
//     return function sum(){
//         console.log(a);

//     }

// }
// let fn=add();
// fn();
// console.log("hey there");
// setTimeout(() => {
//     let a=10;
//     console.log(a);
// }, 2000);
// console.log("done");
// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if (success){
//         resolve("promise resolved");
//     }else{
//         reject("promise rejected");

//     }
// });
// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("promise resolved");
//     } else {
//         reject("promise rejected");
//     }

// // });
// let promise = new Promise((resolve) => {
//     resolve("Success");
// });

// promise.then((data) => {
//     console.log(data);
// });
// let promise2= new Promise((resolve,reject)=>{
//     let success= false;
//     if (success){
//         resolve("promise resolved");
//     }else{
//         reject("promise rejected");
//     }
// });
// promise2.then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// });

// async function fetchData(){
//     try{
//         let response =await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data=await response.json();
        
//         console.log(data);

//     }catch(error){
//         console.log(error);
//     }
// };
// fetchData();