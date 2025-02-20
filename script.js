// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const toggleButton = document.querySelector('.dark-mode-toggle');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️ Light Mode';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
  }
}

// Optional: Save user preference in localStorage
function saveDarkModePreference() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

function loadDarkModePreference() {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'true') {
    document.body.classList.add('dark-mode');
    const toggleButton = document.querySelector('.dark-mode-toggle');
    toggleButton.textContent = '☀️ Light Mode';
  }
}

// Load dark mode preference when the page loads
window.addEventListener('load', loadDarkModePreference);

// Save dark mode preference when the user toggles it
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  toggleDarkMode();
  saveDarkModePreference();
});