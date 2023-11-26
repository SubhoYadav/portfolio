let navButtons = document.querySelectorAll(".nav-btn")
let sections = document.querySelectorAll(".section")

// Making the home page selected by default 
const homeSection = document.getElementById("home")
homeSection.classList.add("sec-active")

navButtons.forEach(navBtn => {
  navBtn.addEventListener("click", function(event) {
    navButtons.forEach(navBtn => {
      navBtn.classList.remove("active-btn")
    })
    event.target.classList.add("active-btn")
    let sectionId = event.target.dataset.id
    // Removing the sec-active class from other sections
    sections.forEach(sec => {
      sec.classList.remove("sec-active")
    })
    //Activating the selected section
    let activeSection = document.getElementById(sectionId)
    activeSection.classList.add("sec-active")
  })
})