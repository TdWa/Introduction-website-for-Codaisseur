//alert('yes!');

//Switch between light and dark theme
const b1 = document.getElementById('b1');
const root = document.documentElement;

b1.onclick = () => {
  if (b1.textContent === 'Dark') {
    b1.textContent = 'Light'
    root.style.setProperty('--bgColor1', 'rgb(3, 2, 19)');
    root.style.setProperty('--bgColor2', 'rgb(11, 30, 43)');
    root.style.setProperty('--bgColor3', 'rgb(3, 2, 19)');
    root.style.setProperty('--accentColor', 'rgb(167, 128, 0)');
    root.style.setProperty('--textColor', 'rgb(255, 250, 238)');
    document.getElementById("science").src = "images/science2.png"; 
    document.getElementById("ball").src = "images/ball2.png";  
    document.getElementById("politics").src = "images/politics2.png";  
    document.getElementById("books").src = "images/books2.png";  
    document.getElementById("guitar").src = "images/guitar2.png";  
    document.getElementById("history").src = "images/history2.png";  
    document.getElementById("leaf").src = "images/leaf2.png";  
    document.getElementById("archdesign").src = "images/archdesign2.png";  
    document.getElementById("gaming").src = "images/gaming2.png";  
    document.getElementById("car").src = "images/car2.png";  
    document.getElementById("dog").src = "images/dog2.png";        
  } else {
    b1.textContent = 'Dark'
    root.style.setProperty('--bgColor1', 'rgb(255, 250, 238)');
    root.style.setProperty('--bgColor2', 'rgb(212, 245, 212)');
    root.style.setProperty('--bgColor3', 'rgb(219, 226, 224)');
    root.style.setProperty('--accentColor', 'rgb(255, 238, 0)');
    root.style.setProperty('--textColor', 'rgb(10, 6, 51)');
    document.getElementById("science").src = "images/science.png"; 
    document.getElementById("ball").src = "images/ball.png";  
    document.getElementById("politics").src = "images/politics.png";  
    document.getElementById("books").src = "images/books.png";  
    document.getElementById("guitar").src = "images/guitar.png";  
    document.getElementById("history").src = "images/history.png";  
    document.getElementById("leaf").src = "images/leaf.png";  
    document.getElementById("archdesign").src = "images/archdesign.png";  
    document.getElementById("gaming").src = "images/gaming.png";  
    document.getElementById("car").src = "images/car.png";  
    document.getElementById("dog").src = "images/dog.png";
  }
}

//Make the colors random with the random button!
const b2 = document.getElementById('b2');

b2.onclick = () => {
  const c = [];
  for (let i=0; i<15; i++) {
    c.push(Math.floor(Math.random() * 256));
  }

  root.style.setProperty('--bgColor1', `rgb(${c[0]}, ${c[1]}, ${c[2]})`);
  root.style.setProperty('--bgColor2', `rgb(${c[3]}, ${c[4]}, ${c[5]})`);
  root.style.setProperty('--bgColor3', `rgb(${c[6]}, ${c[7]}, ${c[8]})`);
  root.style.setProperty('--accentColor', `rgb(${c[9]}, ${c[10]}, ${c[11]})`);
  root.style.setProperty('--textColor', `rgb(${c[12]}, ${c[13]}, ${c[14]})`);
}