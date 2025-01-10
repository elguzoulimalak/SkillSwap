function toggleCourses() {
  const coursesList = document.getElementById('skills-list'); 
  if (coursesList.style.display === 'block') {
      coursesList.style.display = 'none'; 
  } else {
      coursesList.style.display = 'block'; 
  }
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


const toggleSwitch = document.getElementById("dark-mode-toggle");

// Add an event listener to toggle dark mode
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
document.addEventListener("DOMContentLoaded", function () {
      const buttons = document.querySelectorAll(".skill-button");
      const cards = document.querySelectorAll(".skill-card");
    
      buttons.forEach(button => {
        button.addEventListener("click", function () {
          const skill = this.getAttribute("data-category");
              cards.forEach(card => {
                if (card.getAttribute("data-category") === skill) {
                  card.classList.remove("hidden");
                } else {
                  card.classList.add("hidden");
                }
          });
        });
      });
    });