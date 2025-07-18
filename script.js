


let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");

let boks = document.getElementById("boks");





let son = prompt("1-sonni yozing");

let tanla = prompt(`qaysi birini tanlaysiz \n
    1) +
    2) -
    3) *
    4) /
`);

let sonlar = prompt("2-sonni yozing");

item1.textContent = son;

item3.textContent = sonlar;

if(tanla === "1"){
    item2.textContent = "+";
}else if(tanla === "2"){
    item2.textContent = "-";
}else if(tanla === "3"){
    item2.textContent = "*";
}else if(tanla === "4"){
    item2.textContent = "/";
}else{
    alert("xato! iltimos berilgan qiymatni kiriting")
}

let btn = document.getElementById("btn");
let result = document.getElementById("boks");




btn.onclick = function (){
    if (tanla === "1"){
        boks.textContent = Number(son) + Number(sonlar)
    }
    else if(tanla === "2"){
        boks.textContent = son - sonlar;
    }
    else if (tanla === "3"){
        boks.textContent = son * sonlar;
    }
    else if(tanla === "4"){
        boks.textContent = son / sonlar;
    }
};