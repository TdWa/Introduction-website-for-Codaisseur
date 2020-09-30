//alert('yes!');

const b1 = document.getElementById('b1');
const root = document.documentElement;

b1.onclick = () => {
  if (b1.textContent === 'Dark Theme') {
    b1.textContent = 'Light Theme'
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
    b1.textContent = 'Dark Theme'
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



/* 
<img id="science" src="images/science.png" alt="science sketch">

<img id="ball" src="images/ball.png" alt="football sketch">

<img id="politics" src="images/politics.png" alt="politics sketch">

<img id="books" src="images/books.png" alt="books sketch">

<img id="guitar" src="images/guitar.png" alt="guitar sketch">

<img id="history" src="images/history.png" alt="history sketch">

<img id="leaf" src="images/leaf.png" alt="leaf sketch">

<img id="archdesign" src="images/archdesign.png" alt="architecture and design sketch">

<img id="gaming" src="images/gaming.png" alt="gaming sketch">

<img id="car" src="images/car.png" alt="(electric) car sketch">

<img id="dog" src="images/dog.png" alt="dog sketch"></img> 
*/