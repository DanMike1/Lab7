 const slide1 = document.getElementById("meSlide1")
 const slide2 = document.getElementById("meSlide2")
 const slide3 = document.getElementById("meSlide3")
$('.carousel').carousel({
    interval: 20000
});

$('.carousel').on('slid.bs.carousel',async function (e) {
    if (slide1){
            let geturl = await fetch('https://picsum.photos/1024/767');
            let data =  geturl.url;
            let imag = document.querySelector(".carousel-item.active").querySelector("img");
            imag.src = data;
    }

    else if (slide2){
            let geturl = await fetch('https://picsum.photos/1024/766');
            let data =  geturl.url;
            let imag = document.querySelector(".carousel-item.active").querySelector("img");
            imag.src = data;
    }


    else if (slide3){
            let geturl = await fetch('https://picsum.photos/1024/765');
            let data =  geturl.url;
            let imag = document.querySelector(".carousel-item.active").querySelector("img");
            imag.src = data;
    

    }

  
});

    
