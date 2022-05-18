const closedBtn = document.querySelector(".closed-icon")
const alertMenssage = document.querySelector(".alert")
const bellContainerChild = document.querySelectorAll("#bell-container > *")
const notificationsAlert = document.querySelector("#notifications-alert")
const bell = bellContainerChild[0]
const notificationsCount = bellContainerChild[1]
const notificationsList = document.querySelector("#notifications-list")

closedBtn.addEventListener("click", function(){
    alertMenssage.remove()
})

notificationsCount.innerHTML = '0'

let count = 1
setInterval(() => {
    notificationsCount.innerHTML = `${count++}`
}, 10000)

Array.from(bellContainerChild).forEach(child => {
    child.addEventListener("click", function(){
        notificationsList.classList.toggle("open")
    })
})

document.addEventListener("click", function(e){
    if(e.target !== bell && e.target !== notificationsCount){
        if(!notificationsList.contains(e.target)){
            notificationsList.classList.remove("open")
        }
    }
})