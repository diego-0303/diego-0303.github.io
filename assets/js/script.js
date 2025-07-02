/*function onLoad() {
  var themeSelector = document.getElementById('themeSelector');
  for (var themeName in themeMap) {
    var opt = document.createElement('option');
    opt.value = themeName;
    opt.innerHTML = capitalizeFirstLetter(themeName);
    themeSelector.appendChild(opt);
  }
  if (localStorage.getItem('theme') != null) {
    themeSelector.value = localStorage.getItem('theme');
    toggleTheme();
  }
}

function toggleTheme() {
  var themeName = themeSelector.value;
  localStorage.setItem('theme', themeName);
  var element = document.getElementsByTagName('html')[0];
  changeTheme(element, themeMap[themeName]);
}

function changeTheme(element, theme) {
  element.style.setProperty("--primary-background-color", theme['background-color']);
  element.style.setProperty("--primary-text-color", theme['text-color']);
  element.style.setProperty("--primary-highlight-color", theme['highlight-color']);
}*/
const themeSelector = document.getElementById('themeSelector');
const htmlEl = document.documentElement;

// Default to light if not set
let currentTheme = localStorage.getItem('theme') || 'default-light';

// Apply stored theme on load
applyTheme(currentTheme);

themeSelector.addEventListener('click', () => {
  currentTheme = currentTheme === 'default-light' ? 'default-dark' : 'default-light';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);

  // Optionally update the icon
  //themeSelector.textContent = currentTheme === 'light' ? '🌞' : '🌙';
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function applyTheme(themeName) {
  const theme = themeMap[themeName];
  htmlEl.style.setProperty("--primary-background-color", theme['background-color']);
  htmlEl.style.setProperty("--primary-text-color", theme['text-color']);
  htmlEl.style.setProperty("--primary-highlight-color", theme['highlight-color']);
}
