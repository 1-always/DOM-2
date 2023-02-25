//console.dir(document)
console.log(document.domain)
console.log(document.title)
console.log(document.body)
console.log(document.image)
console.log(document.all)
//document.title="abc"
let b=document.getElementById('main-header')
console.log(b)
b.textContent="HI";
b.innerText="hello";
b.innerHTML='<h3> HELLO </h3>';
b.style.borderBottom="4px solid black"

// get eleements bu class name
let c=document.getElementsByClassName('list-group-item');
console.log(c)
c[1].textContent="SECOND";
c[1].style.fontWeight="bold";
c[1].style.backgroundColor="lightblue";
a=['FIRST','SECOND','THIRD','FOURTH'];
for( let i=0; i<c.length; i++){
    c[i].textContent=a[i];
    c[i].style.fontWeight="bold";
c[i].style.backgroundColor="lightblue";

}