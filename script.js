// let place = document.getElementsByClassName("place");
let btn = document.getElementById("btn");
let arr =  ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"]
document.getElementById('some').innerHTML=`<h1 id="some">${arr}</h1>`

const favPlace = () => {
    let ar = prompt("Enter you 1st fav place");
    arr.push(ar);
    ar=prompt("Enter your 2nd fav place");
    arr.push(ar);
    arr.splice(3,1);
    let length = arr.length;
    document.getElementById('places').innerHTML=`<h1 id="some">
    Here is ans:=> ${arr}<br>
    length is:=>${length}
    </h1>`
    
}


btn.addEventListener('click',favPlace);

