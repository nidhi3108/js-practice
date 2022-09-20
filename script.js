var todos=[];

function init(){
     var leftPaneDiv=document.createElement('div');
     var rightPaneDiv=document.createElement('div');
     
     leftPaneDiv.setAttribute("id","leftDiv");
     var heading=document.createElement("h1");
     heading.innerHTML="Task List..";
     leftPaneDiv.appendChild(heading);
      var subheading=document.createElement("h3");
      subheading.innerHTML="add task in right side then pres enter and it will show in left side.."
      leftPaneDiv.appendChild(subheading);

     rightPaneDiv.setAttribute("id","rightDiv");

     document.body.appendChild(leftPaneDiv);
     document.body.appendChild(rightPaneDiv);

     var inputbox=document.createElement("textarea");
     inputbox.placeholder="enter text here";
     inputbox.setAttribute("class","text");
     inputbox.setAttribute("id","input");
     rightPaneDiv.appendChild(inputbox);

     inputbox.addEventListener("keydown",eventhandler);
   
}
function eventhandler(event){
     // console.log("event");
     var KeyCode=event.code;
     var input=document.getElementById("input");
     var value=input.value;
     if(KeyCode==="Enter")
     {
          event.preventDefault();
          // console.log("click");
          var container=document.createElement("div");
          var taskheading=document.createElement("h3");
          var readbutton=document.createElement("button");
          var deletebutton=document.createElement("button");

          container.appendChild(taskheading);
          container.appendChild(readbutton);
          container.appendChild(deletebutton);
          container.setAttribute("class","todocontainer");
          
          readbutton.innerHTML="edit";
          deletebutton.innerHTML="delete";


          // var input=document.getElementById("input");
          // var input.value=
          taskheading.innerHTML=value;

          todos.push(value);
          localStorage.setItem("todos",JSON.stringify(todos))
          var leftDiv=document.getElementById("leftDiv");
          leftDiv.appendChild(container);
           input.value="";    
     }
}
init();
let storedTodos=localStorage.getItem("todos");
if(storedTodos!==null)
{
     todos=JSON.parse(storedTodos);
}

todos.forEach(function(value){
     var container=document.createElement("div");
     var taskheading=document.createElement("h3");
     var readbutton=document.createElement("button");
     var deletebutton=document.createElement("button");

     container.appendChild(taskheading);
     container.appendChild(readbutton);
     container.appendChild(deletebutton);
     container.setAttribute("class","todocontainer");
     
     readbutton.innerHTML="edit";
     deletebutton.innerHTML="delete";


     // var input=document.getElementById("input");
     // var input.value=
     taskheading.innerHTML=value;

     // todos.push(value);
     // localStorage.setItem("todos",JSON.stringify(todos))
     var leftDiv=document.getElementById("leftDiv");
     leftDiv.appendChild(container);
     //  input.value="";    
})
