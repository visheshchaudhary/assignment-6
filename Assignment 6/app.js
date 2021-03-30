const inp1=document.getElementById('taskinput');
const btn=document.getElementById('btn');
const list1=document.getElementById('lists');
function onrun(e1)
{
    if(inp1.value!="")
    {
        const li=document.createElement('li');
        const delbtn=document.createElement("button");
        const donebtn=document.createElement("button");
        li.innerText=inp1.value;
        delbtn.classList.add("deletebutton");
        delbtn.classList.add("fa", "fa-trash-alt", "fa-6");
        delbtn.setAttribute('title','Delete');
        donebtn.classList.add("donebtn");
        donebtn.classList.add("fa","fa-check-circle","fa-6");
        donebtn.setAttribute('title','Done');
        li.appendChild(delbtn);
        li.appendChild(donebtn);
        delbtn.onclick=function(){
        li.remove();
        }
        donebtn.onclick=function(e){
        li.style.textDecoration="line-through";
        e.target.style.color="#157145";
        }
        list1.append(li);
        inp1.value="";
    }
}
btn.addEventListener('click',(e)=>{
    onrun();
})
inp1.addEventListener('keyup',(e)=>{
    if(e.keyCode==13)
        {
            onrun();
        }
})

