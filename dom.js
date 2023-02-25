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
    if(i==2)
    {
        c[i].style.backgroundColor="green";
    }
    else{
        c[i].style.backgroundColor="lightblue";
    }


}
//get element by tag name
let c1=document.getElementsByTagName('li');
console.log(c1)
c1[1].textContent="SECOND";
c1[1].style.fontWeight="bold";
c1[1].style.backgroundColor="lightblue";
a1=['FIRST','SECOND','THIRD','FOURTH','FIFTH'];
for( let i=0; i<c1.length; i++){
    c1[i].textContent=a1[i];
    c1[i].style.fontWeight="bold";
    if(i==2)
    {
        c1[i].style.backgroundColor="green";
    }
    else{
        c1[i].style.backgroundColor="lightblue";
    }


}
//Query selector
let h=document.querySelector('#main-header');
h.style.borderBottom=" 7px solid red";
let inp=document.querySelector('input');
inp.placeholder="ENTER";
let su=document.querySelector('input[type="submit"]');
su.value="DO SUBMIT";
let cl=document.querySelector('.list-group-item');
cl.style.color="red";
let lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color="blue";
let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color="yellow";
//query selector all
let ti=document.querySelectorAll('.title');
console.log(ti);
for( let i =0 ;i<ti.length;i++)
{   
    ti[i].style.backgroundColor="orange";
}


let c2=document.querySelectorAll('.list-group-item');
console.log(c2);
for( let i=0;i<c2.length;i++) {
    if(i==1)
    {
        c2[i].style.color="green";
    }
    if(i%2!=0)
    {
        c2[i].style.backgroundColor="pink";
    }
    if(i%2==0){
        c2[i].style.backgroundColor="gray";
    }
}
