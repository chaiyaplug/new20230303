
// firstImg = carousel.querySelectorAll(".carousel>img")[0],
// arrowIcons = document.querySelectorAll(".wrapper i");
// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }
// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });
// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;
//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }
// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }
// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }
// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);
// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);




// const Carosel = document.querySelector(".Carosel");
// let isdragstart= false;


// const Dragstart = (e) => {
//     isDragstart = true;
//     p
// }
// const dragging = (e) => {
//     if (!isdragstart) return;
//     e.preventDefault();
//     Carosel.scrollLeft = e.pageX;
// }
var Candrag = false;
var prevscroll = 0;
var mousedown = 0;
var newmove = 0;
var childcount = 0;
const carousel = document.querySelector(".carousel");
// console.log(carousel);
// console.log(carousel.childElementCount);


const allpointer = document.querySelector(".pointer");
// console.log(allpointer);
// alert(typeof(allpointer));

// alert(Array.isArray(Object.entries(allpointer.children)));
// console.log(allpointer.childNodes);
// alert(allpointer.childNodes[0], allpointer.childNodes[1]);
Object.entries(allpointer.children).forEach((pointer) => {
    let [key, newdata] = pointer;
    // console.log(key);
    // console.log(newdata);
    newdata.addEventListener("click", function (e) {
        e.preventDefault();
        Object.entries(allpointer.children).forEach((pointer) => {
             let [key, newdata] = pointer;
             newdata.style.backgroundColor = "transparent";
            // console.log(pointer);
           
        })
 // children[3].style.backgroundColor = "red";
            // allpointer.children.style.backgroundColor = "white";
            newdata.style.backgroundColor = "black";
            console.log("#new"+(parseInt(key)+1));
            // console.log('#new'+(key-1));
            window.location.href = '#new'+((parseInt(key)+1));
            // window.location.href("#new"+8);
            carousel.scrollLeft
            // alert(key);
    })
}
);

carousel.addEventListener("mousedown", Mousedown);

function Mousedown(e) {
    prevscroll = e.pageX

    mousedown = e.clientX;
    console.log("mousedown");
    Candrag = true;
    console.log(Candrag);
}
carousel.addEventListener("mouseup", Mouseup);
function Mouseup() {
    console.log("mouseup");
    Candrag = false;
    console.log(Candrag);
    newscroll = carousel.scrollLeft;
    console.log(newscroll);
}

carousel.addEventListener("mousemove", Mousemove);
function Mousemove(e) {

    e.preventDefault();
    if (Candrag) {
        newmove = e.clientX;
        console.log(newmove);
        if (mousedown - newmove > 0) {
            carousel.scrollLeft = carousel.scrollLeft + (mousedown - newmove) * 3;
        }
        else {
            carousel.scrollLeft = carousel.scrollLeft + (mousedown - newmove) * 3;
        }
    }


}


window.onwheel = function (event) {

    var header = document.querySelector("header");
    if (event.deltaY > 0) {
        header.style.opacity = 0;
        header.style.height = 0;

        // console.log(header);
    } else {
        header.style.opacity = 1;
    }
    header.style.height = "250px";
}
window.onscroll = function () { myFunction5() };
function myFunction5() {
    // console.log("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
    if (window.scrollY > 600) {
        var imgscroll = document.querySelectorAll("section>span>img")
        for (let i = 0; i < 3; i++) {
            imgscroll[i].parentElement.classList.add("slideUp");
        }

        // for(i=0;i++;i<3)
        //    { console.log(imgscroll[i].innerHTML);}

        // console.log(document.querySelectorAll("section>span>img"));
        // document.getElementById("myImg").className = "slideUp";
        //     console.log("x");
        //     document.getElementById("myImg").className = "slideUp";
        //   }
    }
}
function myFunction() {
    var idmenu = document.getElementById("idmenu")
    idmenu.classList.toggle("menushow");
    var hamburger = document.getElementById("hamburger")
    // console.log(hamburger)
    // console.log(hamburger.children );
    // alert(document.getElementsByClassName("menushow").length);
    if (document.getElementsByClassName("menushow").length > 0) {
        hamburger.children.item(0).style.transform = "rotate(45deg)";
        hamburger.children.item(0).style.transitionDuration = "1s";
        hamburger.children.item(4).style.transform = " translate(0px,-40px) rotate(-45deg)";

        hamburger.children.item(4).style.transitionDuration = "1s";
        hamburger.children.item(1).style.display = "none";
        hamburger.children.item(2).style.display = "none";
        hamburger.children.item(3).style.display = "none";
        // alert("test")
    }
    else {
        hamburger.children.item(0).style.transform = "none";
        hamburger.children.item(0).style.transitionDuration = "1s";
        hamburger.children.item(4).style.transform = "none";

        hamburger.children.item(4).style.transitionDuration = "1s";
        hamburger.children.item(1).style.display = "block";
        hamburger.children.item(2).style.display = "block";
        hamburger.children.item(3).style.display = "block";
        // alert("test2")
    }


}

// window.onscroll = function () { myFunction1() };

// function myFunction1() {
//     if (window.scrollY > 50) {
//         idmenu.classList.remove("menushow");
//     }
//     else {
//         idmenu.classList.add("menushow");
//     }
// }



function bigImg(x) {
    // this.document.querySelectorAll(".menu2 span li").style.color = "white";
    // console.log(x.querySelector("li"));
    x.querySelector("li").style.color = "white";
}

function normalImg(x) {
    // this.document.querySelector(".menu2 span li").style.color = "coral";
    x.querySelector("li").style.color = "coral";
    // x.style.height = "32px";
    // x.style.width = "32px";
}
function submenu2(x) {
    var submenu2 = x.id;
    var submenu3 = (x.parentElement.parentElement);

    var a = submenu3.getElementsByTagName("ul");
    if (a[0].style.opacity == 0) {
        a[0].style.height = "250px";
        a[0].style.opacity = "1";

    }
    else {
        a[0].style.height = "0px";
        a[0].style.opacity = "0";


    }


    console.log(a);

    // console.log("#"+submenu2+" +"+" ul");
    // var submenu2=document.querySelector("#"+submenu2+" +"+" ul");


    //  document.querySelector()
    //   var newsubmenu=  document.queryselector((submenu2[1].value)+"+ul");

    // x.get("submenu2")
    // x.parentElement.parentElement.parentElement.classList.toggle("togsubmenu2") 
    //    x.querySelector("")
    //  var submenu2=this.querySelector(".submenu2");
    // submenu2.style.height="0px";
    // console.log(document);
    // console.log(submenu2);
}
