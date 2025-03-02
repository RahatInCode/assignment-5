let colors = [
    "#fef9c3", 
    "#fcd34d", 
    "#6ee7b7", 
    "#93c5fd", 
    "#fca5a5", 
    "#f43f5e", 
    "#6366f1", 
    "#22d3ee", 
    "#14b8a6", 
    "#e879f9"  ,
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)", 
    "linear-gradient(to right, #ffdde1, #ee9ca7)", 
    "linear-gradient(to right, #ffefba, #ffffff)", 
    "linear-gradient(to right, #d4fc79, #96e6a1)", 
    "linear-gradient(to right, #a18cd1, #fbc2eb)",
    "linear-gradient(to right, #8e2de2, #4a00e0)", 
    "linear-gradient(to right, #ff758c, #ff7eb3)", 
    "linear-gradient(to right, #ff9966, #ff5e62)", 
    "linear-gradient(to right, #56ab2f, #a8e063)"  
];

document.getElementById("colorChanger").addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    document.body.style.background = colors[randomIndex];
document.body.style.backgroundSize = "cover"; 
});
// taking on a new page when the logo is clicked 
document.getElementById('logo')
.addEventListener('click', function(){
    window.open('newPage.html', '_blank'); 
})


// current date
let today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
document.getElementById("date").textContent = " Date: " + today;

// task buttons


const buttons = document.getElementsByClassName('taskBtn');

for (let button of buttons) {
    button.addEventListener('click', function () {
        alert('Board updated successfully!');
    });
}

// clear history
document.getElementById("clearLog").addEventListener("click", function() {
    let activitiesList = document.getElementById("logContainer");
    activitiesList.innerHTML = ""; 
});

// task completing log
document.addEventListener("DOMContentLoaded", function () {
    let taskCount = 6; 
    const taskCounter = document.querySelector(".bg-blue-100 + div p.font-bold"); 
    const logContainer = document.getElementById("logContainer");
    const taskButtons = document.querySelectorAll(".taskBtn");

    taskCounter.textContent = taskCount;

    taskButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const cardTitle = this.parentElement.querySelector("h3").textContent;
            
            const now = new Date();
            const hours = now.getHours() % 12 || 12; 
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "PM" : "AM";
            const currentTime = `${hours}:${minutes} ${ampm}`;

            logContainer.innerHTML += `<p> You completed <strong>${cardTitle}</strong> at ${currentTime}.</p>`;

            // Mark task as completed
            this.textContent = "Completed";
            this.disabled = true;
            this.classList.remove("bg-blue-500");
            this.classList.add("bg-gray-400");

            // Update task count
            taskCount--;
            taskCounter.textContent = taskCount;

            // Show final alert  when all tasks are completed
            if (taskCount === 0) {
                setTimeout(() => {
                    alert("🎉 Congratulations! You have completed today's tasks!");
                }, 500);
            }
        });
    });
});
