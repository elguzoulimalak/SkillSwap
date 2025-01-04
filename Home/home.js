function toggleCourses() {
    const coursesList = document.getElementById('courses-list'); 
    if (coursesList.style.display === 'block') {
        coursesList.style.display = 'none'; // Show the list
    } else {
        coursesList.style.display = 'block'; // Hide the list
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


  const toggleSwitch = document.getElementById("dark-mode-toggle");

  // On page load, check localStorage for mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
  }

  // Add an event listener to toggle dark mode
  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
    document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".courses-list button");
      const cards = document.querySelectorAll(".card");
    
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const category = button.getAttribute("data-category");
    
          cards.forEach(card => {
            if (category === "All" || card.classList.contains(category)) {
              card.style.display = "block"; // Affiche la carte
            } else {
              card.style.display = "none"; // Cache la carte
            }
          });
        });
      });
    });
    
  })
