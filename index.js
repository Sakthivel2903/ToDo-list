function addtask(){
    var input=document.getElementById("input").value
    var element=document.getElementById("task-container")
    console.log(element)
    var newElement=document.createElement('div')
    newElement.setAttribute('id','ind-task')
    newElement.innerHTML=`<h4>${input}</h4><button onclick="DeleteTask(event)">Delete</button>`
    element.append(newElement)
}
function DeleteTask(event){
    event.target.parentElement.remove()
}