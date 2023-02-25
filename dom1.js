//traversing the nodes
let list=document.querySelector('#items');
//parent node 
console.log(list.parentNode);
list.parentNode.style.backgroundColor="lightgrey";
console.log(list.parentNode.parentNode);
//parent element
console.log(list.parentElement);
list.parentElement.style.backgroundColor="lightgrey";
//child node
console.log(list.childNodes);//notsuggestable
console.log(list.children);
//first child
console.log(list.firstChild);//notsuggestable
//firstelementchild
console.log(list.firstElementChild);
//last child
console.log(list.lastChild);//notsuggestable
//lastelementchild
console.log(list.lastElementChild);
//nextsibiling
console.log(list.nextSibling);//notsuggestable
console.log(list.nextElementSibling);
//previous sibling
console.log(list.previousElementSibling);




//create element
let newdiv=document.createElement('div');
newdiv.className="classdiv";
newdiv.id="id1"
newdiv.setAttribute('title','newdiv');

//create content
//create textnode
let textnode=document.createTextNode('another hello');
newdiv.appendChild(textnode);
//putting inside dom
let con=document.getElementById('main-header');
let h1=document.getElementById('header-title');
con.insertBefore(newdiv,h1);
newdiv.style.fontsize="40px";
console.log(newdiv);
console.log(con);


