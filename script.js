const suggestBtn = document.getElementById("suggestBtn");
const suggestionDiv = document.getElementById("suggestion");
const darkModeBtn = document.getElementById("darkModeToggle");

suggestBtn.addEventListener("click", generateSuggestion);
darkModeBtn.addEventListener("click", toggleDarkMode);

function generateSuggestion() {
    const name = document.getElementById('nameInput').value.trim();

    if (name === "") {
        suggestionDiv.textContent = "Please enter a valid name.";
        suggestionDiv.classList.add("show");
        return;
    }

    const firstLetter = name[0].toUpperCase();
    let suggestion = "";

    if ("AEIOU".includes(firstLetter)) {
        suggestion = "You have a creative spark! Explore art, writing, or music.";
    } else if (firstLetter >= "A" && firstLetter <= "H") {
        suggestion = "You are a natural leader — management or entrepreneurship could suit you.";
    } else if (firstLetter >= "I" && firstLetter <= "P") {
        suggestion = "You have strong analytical skills — careers in science, engineering, or finance may be ideal.";
    } else {
        suggestion = "You are compassionate — teaching or social work could bring you joy.";
    }

    suggestionDiv.textContent = `Hello ${name}! ${suggestion}`;
    
    // Show animation
    suggestionDiv.classList.remove("show");
    setTimeout(() => suggestionDiv.classList.add("show"), 10);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    darkModeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}
