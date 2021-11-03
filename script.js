// var firstHeading = document.getElementsByClassName("hello")[0];
// var myButton = document.getElementById("button");
// var myText="Hello World x";
// var myNumber =2;

// myButton.addEventListener("click", function(){
//   this.classList.toggle("blue-background");
// });



:root {
  /* we define some variables to hold our colors*/
  --bg-section: #374057;
  --color-headers: #2c3e50;
  --color-highlight-green: #00af4e;
  --color-light-gray: #eeeff2;
}
* {
  /* apply our google font */
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  font-size: 16px;
}
body {
  /* make the body full height */
  position: relative;
  height: 100vh;
  background-color: var(--bg-section);
  display: flex;
}
/* position our container in the middle */
.container {
  width: 900px;
  margin: auto;
  padding: 20px;
}
/* style the header */
h1 {
  font-size: 2rem;
  color: white;
  text-align: center;
}


document.addEventListener('DOMContentLoaded', () => {
  // grab all the slides
  let slides = document.querySelectorAll('#slider .slide')
  // set initial slide
  let currentSlide = 0
  //grab both buttons
  const nextButton = document.querySelector('.button-right')
  const prevButton = document.querySelector('.button-left')
  function nextSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = 'slide'
    // set the current slide as the next one
    currentSlide = (currentSlide + 1) % slides.length
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = 'slide showing'
  }
  function prevSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = 'slide'
    // set the current slide as the previous one
    currentSlide = (currentSlide - 1) % slides.length
    if (currentSlide == -1) {
      currentSlide = slides.length - 1
    }
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = 'slide showing'
  }
  nextButton.addEventListener('click', () => {
    // go to next slide on click of the button
    nextSlide()
  })
  prevButton.addEventListener('click', () => {
    // go to previous slide on click of the button
    prevSlide()
  })
  /* VERTICALLY ALIGN THE BUTTONS IN THE MIDDLE OF THE SLIDER TEXT
   */
  function positionSliderButton() {
    // grab the slider
    let slider = document.querySelector('.slide-text')
    // grab its height
    let sliderHeight = slider.getBoundingClientRect().height
    // grab the button
    let buttons = document.querySelectorAll('.slider-button')
    // for each of the buttons
    for (button of buttons) {
      // get their height
      let buttonHeight = button.getBoundingClientRect().height
      // position them right in the middle of the text,
      button.style.top = ((sliderHeight - buttonHeight) / 2).toString() + 'px'
    }
  }
  positionSliderButton()
  // whenever the window is resize, reposition the buttons
  window.addEventListener('resize', () => {
    positionSliderButton()
  })
})


// function changeTheText() {
//   if (firstHeading.innerHTML == "Press the button"){
//     firstHeading.innerHTML = myText + myNumber;
// } else {
//   firstHeading.innerHTML = "Texten stämmer inte överens med Hello World eller Hello World. Så jag ändrar den till detta istället";
//   }
// }
// changeTheText();


// var ux = ["User research", "Information architecture", "Interaction design", "Interface design"];
// var arrayLength = ux.length;
// var myList = "<ul>";
// var i = 0;
//
// while (i < arrayLength) {
//   myList += "<li>" + ux[i] + "</li>";
//   i++;
// }
// myList += "</ul>";
// document.getElementById("minArrayDiv").innerHTML = myList


// var text = "";
// var i = 0;
//
// while (i < 10) {
//   text += "<br>Siffran är " + i;
//   i++;
// }
// document.getElementById("minArrayDiv").innerHTML = text;



// var ux = ["User research", "Information architecture", "Interaction design", "Interface design"];
// var arrayLength = ux.length;
// var myList = "<ul>";
// for (var i =0; i <arrayLength; i++) {
//   myList += "<li>" + ux[i] + "</li>";
// }
// myList += "</ul>";
// document.getElementById("minArrayDiv").innerHTML = myList;

// console.log(ux[0]);
// console.log(ux[1]);
// console.log(ux[2]);
// console.log(ux[3]);
// console.log(ux.length);
