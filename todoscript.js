var inputBox=document.getElementById("text");
var saveTodo=document.getElementById("saveTodo");
var todoContainer=document.getElementById("todoContainer");
var todo1=document.getElementById("todo1");
var todo2=document.getElementById("todo2");
var todo3=document.getElementById("todo3");
  
// console.log(inputBox);
// console.log(saveTodo);
// console.log(todoContainer);
// console.log(todo1);
// console.log(todo2);
// console.log(todo3);

var selectTodo=[];
for(var i=0;i<todoContainer.children.length;i++){
    var list=todoContainer.children[i];
    // console.log(list);
    var deleteButton=list.children[2];
    deleteButton.addEventListener("click",function(event){
        var parent=event.target.parentNode;
        var unorderedList=parent.parentNode;
        // console.log("todo clicked",labelNode.innerHTML);
        unorderedList.removeChild(parent);
});
}
for(var i=0;i<todoContainer.children.length;i++){
    var list=todoContainer.children[i];
    // console.log(list);
    var editButton=list.children[1];
    editButton.addEventListener("click",function(event){
        var parent=event.target.parentNode;
        selectTodo=parent.children[0];
        // console.log(parent.children[0].innerHTML)
        inputBox.value=parent.children[0].innerHTML;
});
}

saveTodo.addEventListener("click",function()
{
    selectTodo.innerHTML=inputBox.value;
    selectTodo=null;
})
