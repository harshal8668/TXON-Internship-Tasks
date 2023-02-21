document.querySelector('.btn').onclick=function(){
    if(document.querySelector('input').value.length==0){
        alert("Please enter something to add....")
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
        <ul>
        <div class="added"><li>
            <span class="task-text"  style="font-family:Labrada;">
                ${document.querySelector('input').value}
            </span>
            <button class="delete"><img src="./del.png"></button>
        
            </li></div>
        </ul>`;
        
        
        var content=document.querySelectorAll(".delete");
        for(var i=0;i<content.length;i++){
            content[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
}