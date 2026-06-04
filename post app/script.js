let title=document.querySelector(".post-title");
let content=document.querySelector(".post-content");
let btn=document.querySelector("#searchBtn");
let input=document.querySelector("#enter-title");
let cards=document.querySelector("#cards")
let allPosts=[];
let Posts=[];
btn.addEventListener('click',(e)=>{
    e.preventDefault();
   if (Posts.length === 0) {
        fetchData();
    } else {
        searchPost();
    }
    
});
input.addEventListener('keyup',()=>{

    
    searchPost(Posts) ;


    

})
async function fetchData(){
    try{
        let response= await fetch("https://jsonplaceholder.typicode.com/posts");
        let data= await response.json();
        console.log(data);
        allPosts=data;
postData(allPosts);
    }catch(error){
        console.log ("unable to fetch data from given api");
    }

};
async function postData(posts){

    cards.innerHTML="";
   posts.forEach(post => {
     let div=document.createElement("div");
    div.classList.add("cards");
    div.innerHTML=`<h2>${post.title}</h2>
    <p>${post.body}</p>
`;
    
cards.appendChild(div);
   });
}
async function searchPost() {
       let value = input.value.toLowerCase();

    let filtered = allPosts.filter(post =>
        post.title.toLowerCase().includes(value)
    );
    postData(filtered);
}
