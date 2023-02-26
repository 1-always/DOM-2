/*let its=document.querySelectorAll('#item4');
its.forEach((item1) =>console.log(item1));
let btn=document.getElementById('btn1');
btn.addEventListener('click',addevent);
function addevent(e){
    e.preventDefault();
    document.getElementById('my-form').style.backgroundColor="darkgrey";
    document.getElementById('body').classList.add('bg-dark');
}*/
let form=document.getElementById('my-form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let msg=document.getElementById('msg');
let userlist=document.getElementById('users');
form.addEventListener('submit',onsubmit);
 function onsubmit(e){
    e.preventDefault();
    if(name.value== '' || email.value=='')
    {  msg.classList.add('error');
        msg.innerHTML="Required fields";
        setTimeout(() => msg.remove(), 3000);

    }
    else
    {
        let list=document.createElement('li');
        let append=document.createTextNode(name.value +"   "+ email.value);
        list.appendChild(append);
        console.log(list)
        let obj={
            name: name.value,
            email: email.value
        };
    
        console.log(localStorage);
        localStorage.setItem(name.value,email.value);
        let myobj1=JSON.stringify(obj);
        console.log("stringify"+ myobj1);
        localStorage.setItem("myobj",myobj1);
        console.log(localStorage);
        console.log(localStorage.getItem(name.value));
        sessionStorage.setItem(name.value,email.value);
        document.cookie= 'name=name.value','value=email.value';
        userlist.appendChild(list);
        name.value="";
        email.value="";

    }
 }







