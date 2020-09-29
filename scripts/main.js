//alert('yes!');

const b1 = document.getElementById('b1');
const root = document.documentElement;

b1.onclick = () => {
  if (b1.textContent === 'Dark Theme') {
    b1.textContent = 'Light Theme'
    root.style.setProperty('--bgColor1', 'rgb(3, 2, 19)');
    root.style.setProperty('--bgColor2', 'rgb(8, 23, 32)');
    root.style.setProperty('--bgColor3', 'rgb(3, 2, 19)');
    root.style.setProperty('--accentColor', 'rgb(167, 128, 0)');
    root.style.setProperty('--textColor', 'rgb(255, 250, 238)');     
  } else {
    b1.textContent = 'Dark Theme'
    root.style.setProperty('--bgColor1', 'rgb(255, 250, 238)');
    root.style.setProperty('--bgColor2', 'rgb(212, 245, 212)');
    root.style.setProperty('--bgColor3', 'rgb(219, 226, 224)');
    root.style.setProperty('--accentColor', 'rgb(255, 238, 0)');
    root.style.setProperty('--textColor', 'rgb(10, 6, 51)');    
  }
}



// --bgColor1: rgb(255, 250, 238);
// --bgColor2: rgb(212, 245, 212);
// --bgColor3: rgb(219, 226, 224);
// --accentColor: rgb(255, 238, 0);
// --textColor: rgb(10, 6, 51);

// --bgColor1: rgb(3, 2, 19);
// --bgColor2: rgb(8, 23, 32);
// --bgColor3: rgb(3, 2, 19);
// --accentColor: rgb(145, 107, 5);
// --textColor: rgb(255, 250, 238);