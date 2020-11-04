

/*-----------------------------------------------------------------------------------------*/

/*JS for å kollapse sidebar*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollLeft > 5 || document.documentElement.scrollLeft > 5) {
        /*legger til klassen sidebarcollapse og logocollapse som har andre egenskaper i css*/
        document.getElementsByClassName("sideBar")[0].classList.add("sideBarCollapse");
        document.getElementsByClassName("logo")[0].classList.add("logoCollapse");

/*Fjerner all tekst slik at kun ikoner står igjen*/
        document.getElementsByClassName("slagOrd")[0].innerHTML = "";
        document.getElementsByClassName("fas fa-info")[0].innerHTML = "";
        document.getElementsByClassName("fas fa-phone")[0].innerHTML = "";
        document.getElementsByClassName("fas fa-paper-plane")[0].innerHTML = "";
        document.getElementsByClassName("fas fa-bars")[0].innerHTML = "";
    }
    else if (document.body.scrollLeft < 5 || document.documentElement.scrollLeft < 5) {
/*fjerner klassene som ble lagt til*/
        document.getElementsByClassName("sideBar")[0].classList.remove("sideBarCollapse");
        document.getElementsByClassName("logo")[0].classList.remove("logoCollapse");

/*Legger tilbake originale verdier*/
        document.getElementsByClassName("slagOrd")[0].innerHTML = "LEARN.<br>EXPERIENCE.<br>INNOVATE.<br>";
        document.getElementsByClassName("fas fa-info")[0].innerHTML = "REQUEST INFO";
        document.getElementsByClassName("fas fa-phone")[0].innerHTML = "(800)658-5744";
        document.getElementsByClassName("fas fa-paper-plane")[0].innerHTML = "APPLY AT UAT";
        document.getElementsByClassName("fas fa-bars")[0].innerHTML = "MENU";
    }
}

/*-----------------------------------------------------------------------------------------*/
/*Side-pilene som scroller høyre og venstre*/

function rightScroll() {
    document.getElementsByClassName("sideSlide2")[0].scrollIntoView();
}
function rightScroll1() {
    document.getElementsByClassName("sideSlide3")[0].scrollIntoView();
}
function leftScroll() {
    document.getElementsByClassName("sideSlide1")[0].scrollIntoView();
}
function leftScroll1() {
    document.getElementsByClassName("sideSlide2")[0].scrollIntoView();
}
/*-----------------------------------------------------------------------------------------*/
/*Pilene som scroller i nedre venstre infomeny*/

function plusSlides() {
    var slides1 = document.getElementsByClassName("slide1")[0];
    var slides2 = document.getElementsByClassName("slide2")[0];

        if (slides1.style.display === "block") {
                slides2.style.display = "block";
                slides1.style.display = "none";
                    console.log("slides2 block plus");
        }
            else if (slides2.style.display === "block") {
                slides1.style.display = "block";
                slides2.style.display = "none";
            console.log("slides1 block plus");
            }
}
function minusSlides() {
    var slides1 = document.getElementsByClassName("slide1")[0];
    var slides2 = document.getElementsByClassName("slide2")[0];

        if (slides2.style.display === "block") {
            slides1.style.display = "block";
            slides2.style.display = "none";
            console.log("slides1 block minus");
        }
            else if (slides1.style.display === "block") {
            slides2.style.display = "block";
            slides1.style.display = "none";
            console.log("slides2 block minus");
        }
}
