const closedBtn = document.querySelector(".closed-icon")
const alertMenssage = document.querySelector(".alert")

closedBtn.addEventListener("click", function(){
    alertMenssage.remove()
})