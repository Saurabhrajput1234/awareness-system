let pin = 0;
function saurabh(x){
    pin= pin + x;
    slideshow(pin);


}

slideshow(pin)
function slideshow(num){
    let slides = document.getElementsByClassName('music1');
    if(num == slides.length){
        pin = 0;
        num = 0;
    }
    console.log("slide")
    if (num < 0)
    { pin = slides.length-1;
     num = slides.length-1;}

    for(let y of slides){
        y.style.display = "none";
    }
        
    
    slides[num].style.display = "block";  
}