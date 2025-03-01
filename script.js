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
// task buttons


const buttons = document.getElementsByClassName('taskBtn');

for (let button of buttons) {
    button.addEventListener('click', function () {
        alert('Board updated successfully!');
    });
}


