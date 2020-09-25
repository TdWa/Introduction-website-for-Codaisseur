//alert('yes!');

const b1 = document.getElementById('b1');
const root = document.documentElement;

b1.onclick = () => {
  if (b1.textContent === 'Dark Theme') {
    b1.textContent = 'Light Theme'
    root.style.setProperty('--color1', 'rgb(61, 58, 58)');
    root.style.setProperty('--color2', 'rgb(61, 158, 58)');
    root.style.setProperty('--color3', 'rgb(61, 58, 158)');  
  } else {
    b1.textContent = 'Dark Theme'
    root.style.setProperty('--color1', 'rgb(240, 255, 240)');
    root.style.setProperty('--color2', 'rgb(230, 223, 223)');
    root.style.setProperty('--color3', 'rgb(109, 116, 180)'); 
  }
}