

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
    /*Henter elementene i begge infomenyen på hovedside*/
    var slides1 = document.getElementsByClassName("slide1")[0];
    var slides2 = document.getElementsByClassName("slide2")[0];

/*Sjekker:
* Hvis slide1 = info 1 er vist (block) så endres slide 2 til block og slide 1 skjules med none og vice versa*/
        if (slides1.style.display === "block") {
            slides2.style.display = "block";
            slides1.style.display = "none";
        }
            else if (slides2.style.display === "block") {
                slides1.style.display = "block";
                slides2.style.display = "none";
            }
}
function minusSlides() {
    var slides1 = document.getElementsByClassName("slide1")[0];
    var slides2 = document.getElementsByClassName("slide2")[0];

        if (slides2.style.display === "block") {
            slides1.style.display = "block";
            slides2.style.display = "none";
        }
            else if (slides1.style.display === "block") {
            slides2.style.display = "block";
            slides1.style.display = "none";
        }
}
/*-----------------------------------------------------------------------------------------*/

/*Pilene som scroller nede til høyre i infomeny*/
function plusSlides1() {
    /*Henter elementene i begge infomenyen på hovedside*/
    var slides3 = document.getElementsByClassName("slide3")[0];
    var slides4 = document.getElementsByClassName("slide4")[0];

    /*Sjekker:
    * Hvis slide1 = info 1 er vist (block) så endres slide 2 til block og slide 1 skjules med none og vice versa*/
    if (slides3.style.display === "block") {
        slides4.style.display = "block";
        slides3.style.display = "none";
    }
    else if (slides4.style.display === "block") {
                slides3.style.display = "block";
                slides4.style.display = "none";
    }
}
function minusSlides1() {
    var slides3 = document.getElementsByClassName("slide3")[0];
    var slides4 = document.getElementsByClassName("slide4")[0];

    if (slides4.style.display === "block") {
        slides3.style.display = "block";
        slides4.style.display = "none";
    }
    else if (slides3.style.display === "block") {
        slides4.style.display = "block";
        slides3.style.display = "none";
    }
}

/*-----------------------------------------------------------------------------------------*/

/*funksjon som sørger for at ordene skifter på hovedsiden hvert 3 sekund*/
setInterval(skiftOrd, 3000);

function skiftOrd() {
    var dynamiskOrd = document.getElementsByClassName("dynamicOrd")[0];

    if (dynamiskOrd.innerHTML === "PIXELS") {
        dynamiskOrd.innerHTML = "QUBIT";

        } else if (dynamiskOrd.innerHTML === "QUBIT") {
            dynamiskOrd.innerHTML = "FIREWALL";

                } else if (dynamiskOrd.innerHTML === "FIREWALL") {
                    dynamiskOrd.innerHTML = "PIXELS";
    }
}
/*-----------------------------------------------------------------------------------------*/
/*Funksjon som sørger for at alle studiene droppes ned og pila roterer*/

function dropDownDegree() {
    let dropdown = document.getElementsByClassName("theDegreesDropdown")[0];
    let pilElement = document.getElementsByClassName("degree-pil")[0];
console.log("HEI");
    if (dropdown.style.display = 'none'){
        pilElement.style.transform = 'rotate(180deg)';
        dropdown.style.display = "block";
        console.log("1");
    }
    /*DENNE FUNKER IKKE*/
        else if (dropdown.element.style.display === "block"){
            pilElement.style.transform = 'rotate(180deg)';
            dropdown.style.display = "none";
        console.log("2");
    }
}