const slide = document.getElementById("meSlide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

prev.addEventListener('click',thotDan)
next.addEventListener('click',thotDan)

// function prevPhoto(){
//     fetch("https://picsum.photos/1080/720")
//         .then(res=>res.json())
//         .then(data =>{

           

//         })

// }
// function nextPhoto(){
//     fetch("https://picsum.photos/300/720")
//         .then(res=>res.json())
//         .then(data =>{
//             meSlide.innerHTML = <img src = "${data.file}"/>

//         })

// }
async function thotDan(){
    let response = await fetch('https://picsum.photos/1024/768');
    let data = await response.url;
    let imag = document.getElementById("img_")
    imag.src = data
    

    // imag.src= response
}
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
