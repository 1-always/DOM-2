var f=document.getElementById('addForm');
var it=document.getElementById('items');
var fill=document.getElementById('filter');
//let button=document.getElementById('')
f.addEventListener('submit',additem);
//add event listener to delete item 
it.addEventListener('click',removeitem);
fill.addEventListener('keyup',filteritem);
//add item
function additem(e){
    e.preventDefault();
    //console.log("11233");
    //get input value 
    var newitem1 =document.getElementById('item').value;

    //create new element
    var list1=document.createElement('li');
    list1.className='list-group-item';
    list1.appendChild(document.createTextNode(newitem1));
    var del=document.createElement('button');
    //add calsses
    del.className="btn btn-danger btn-sm float-right delete";
    //append
    del.appendChild(document.createTextNode('X'));
    var edit=document.createElement('button');
    edit.className="btn btn-danger btn-sm float-right"
    edit.appendChild(document.createTextNode('Edit'));

    it.appendChild(list1);
    list1.appendChild(del);
    list1.appendChild(edit);



}
function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u sure ?'))
        {
            let list1=e.target.parentElement;
            it.removeChild(list1);
        }
    }
    
}
function filteritem(e)
{
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    var items=it.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var name=item.firstChild.textContent;
        if(name.toLowerCase().indexOf(text)!=-1)
        {
            item.style.backgroundColor="grey";
            item.style.display='block';

        }
        else{
            item.style.display="none";
        }
    })

}