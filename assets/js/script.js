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

// SVG markup as template strings, fill color will be set dynamically
function getSwitchOnSVG(fillColor) {
  return `<svg width="36" height="36" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M91.597 148.515L53.048 147.726C53.048 147.726 52.612 75.7392 52.615 72.7712C52.619 67.0482 54.185 62.5142 59.593 62.5142C68.136 62.5142 82.765 63.3042 91.597 63.3042C96.845 63.3042 98.484 66.0482 98.575 71.1942C98.789 83.2382 98.575 104.332 98.575 104.332C98.575 104.332 101.915 126.321 103.226 131.947C104.546 137.609 102.316 138.254 100.125 140.626C96.198 144.875 91.597 148.515 91.597 148.515ZM91.597 105.91L92.372 70.6172L59.81 69.8272L60.026 107.487L63.902 133.524L96.25 134.314L91.597 105.91ZM77.309 109.882C91.142 109.882 93.574 129.503 80.064 129.503C65.272 129.503 63.424 109.882 77.309 109.882ZM79.146 123.965C85.026 123.965 83.968 115.425 77.947 115.425C71.902 115.425 72.707 123.965 79.146 123.965ZM72.632 94.0552L72.373 77.0452L80.139 77.2162L79.9 94.2892L72.632 94.0552Z" fill="${fillColor}"/>
  </svg>`;
}
function getSwitchOffSVG(fillColor) {
  return `<svg width="36" height="36" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.226 79.0832C101.914 84.7082 98.575 108.956 98.575 108.956C98.575 108.956 98.788 127.791 98.575 139.835C98.483 144.981 96.846 147.725 91.597 147.725C82.764 147.725 68.137 148.515 59.593 148.515C54.185 148.515 52.619 143.981 52.616 138.258C52.614 135.291 53.048 63.3042 53.048 63.3042L91.597 62.5142C91.597 62.5142 96.199 66.1542 100.125 70.4042C102.315 72.7762 104.546 73.4222 103.226 79.0832ZM77.738 138.144C91.908 138.144 91.819 116.647 77.98 116.647C62.828 116.647 63.514 138.144 77.738 138.144ZM84.435 85.6212L77.419 85.1052L75.009 100.595H81.508L84.435 85.6212ZM89.304 68.3062L59 69.2872L58.804 107.733L60.164 107.877L62.876 76.9372L97.503 76.3062L89.304 68.3062ZM77.796 121.877C84.899 121.877 84.944 132.909 77.671 132.909C70.372 132.909 70.02 121.877 77.796 121.877Z" fill="${fillColor}"/>
  </svg>`;
}

// Default to light if not set
let currentTheme = localStorage.getItem('theme') || 'default-light';

// Apply stored theme and icon on load
applyTheme(currentTheme);
updateThemeIcon(currentTheme);

themeSelector.addEventListener('click', () => {
  currentTheme = currentTheme === 'default-light' ? 'default-dark' : 'default-light';
  localStorage.setItem('theme', currentTheme);
  applyTheme(currentTheme);
  updateThemeIcon(currentTheme);
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

function updateThemeIcon(themeName) {
  // Use white icon for dark mode, black for light mode
  const fillColor = themeName === 'default-dark' ? '#fff' : '#000';
  themeSelector.innerHTML = themeName === 'default-dark'
    ? getSwitchOffSVG(fillColor)
    : getSwitchOnSVG(fillColor);
}
