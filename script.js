const inputbox = document.getElementById("input-box");
const Listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("Write something before adding!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveTask();
}

Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("data", Listcontainer.innerHTML);

}
function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
