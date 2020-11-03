

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

/*var arrowright = document.getElementsByClassName("arrowRight");
var arrowright1 = document.getElementsByClassName("arrowRight1");
var arrowleft = document.getElementsByClassName("arrowLeft");
var arrowleft1 = document.getElementsByClassName("arrowLeft1");

arrowright.addEventListener("click", rightScroll);
arrowright1.addEventListener("click", rightScroll1);
arrowleft.addEventListener("click", leftScroll);
arrowleft1.addEventListener("click", leftScroll1);*/

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
