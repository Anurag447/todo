let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function() {
    let item=document.createElement("li");
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("Delete");

    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value="";
});


let y=document.querySelector(".Delete");
for(x of y){
    x.addEventListener("click",function(){
        console.log("Element Deleted");
    });
}