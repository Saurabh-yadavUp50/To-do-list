let Addbtn = document.getElementById("Addbtn");
let todolistdiv = document.querySelector(".todolistdiv ul");

  

Addbtn.addEventListener("click",()=>{
let Taskvalue = document.getElementById("taskvalue").value;
if(Taskvalue === ""){
    alert(" plzz Enter the task");
 }
 else{

     let li = document.createElement("li");
     li.innerHTML = `<div class = "todolist"> 
                    <input type= "text" class= "task" value="" readonly>
                    <button class="editbtn"><i class="fa-regular fa-pen-to-square"></i></button>
                     <button class="donebtn"><i class="fa-regular fa-circle-check"></i></button>
                      <button class= "removebtn"><i class="fa-solid fa-delete-left"></i></button>
                    </div>  `;
 todolistdiv.appendChild(li);
 let task = li.querySelector(".task");
 task.value =Taskvalue;

let removebtn = li.querySelector(".removebtn");
  removebtn.addEventListener("click",()=>{

    li.remove();

  });

  //Edit button 

  let editbtn = li.querySelector(".editbtn");
  editbtn.addEventListener("click",()=>{
    task.toggleAttribute("readonly");
    task.focus();

    

  });

  // Done button

let donebtn = li.querySelector(".donebtn");
  donebtn.addEventListener("click",()=>{
    task.classList.toggle("active");




 })



}
 document.getElementById("taskvalue").value = "" ;

 
});

   
