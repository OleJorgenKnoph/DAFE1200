/*-----------------------------------------------------------------------------------------*/
/*Pilene som scroller i nedre venstre infomeny*/

function plusSlides() {
    /*Henter elementene i begge infomenyen på hovedside*/
    let slides1 = document.getElementsByClassName("slide1")[0];
    let slides2 = document.getElementsByClassName("slide2")[0];

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
    let slides1 = document.getElementsByClassName("slide1")[0];
    let slides2 = document.getElementsByClassName("slide2")[0];

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
    let slides3 = document.getElementsByClassName("slide3")[0];
    let slides4 = document.getElementsByClassName("slide4")[0];

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
    let slides3 = document.getElementsByClassName("slide3")[0];
    let slides4 = document.getElementsByClassName("slide4")[0];

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
    let dynamiskOrd = document.getElementsByClassName("dynamicOrd")[0];

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
/*Henter nødvending elementer*/
    let dropdown = document.getElementsByClassName("theDegreesDropdown")[0];
    let pilElement = document.getElementsByClassName("degree-pil")[0];

/*Sleit med denne. Denne ble alltid 'true'. Løsning var condition under*/
    /*henter alle CSS-verdiene til elementet "dropdown". Henter så propertyValue av denne og sjekker om den === none*/
    if (window.getComputedStyle(dropdown).getPropertyValue("display") === "none"){
        pilElement.style.transform = 'rotate(180deg)';
        dropdown.style.display = "block";
    }
    else {
            pilElement.style.transform = "rotate(180deg)";
            dropdown.style.display = "none";
    }
}
/*-----------------------------------------------------------------------------------------*/