/*-------------------------------------------------*/
/*MAKING THE CLICKED MENULINK ACTIVE*/

let menuLink = document.getElementsByClassName("menuLi");

for (let i = 0; i < menuLink.length; i++) {

menuLink[i].addEventListener("click", selectActive());

    function selectActive() {

        let currentLink = document.getElementsByClassName("active");

        currentLink[0].className = currentLink[0].className.replace("", " active");
        this.className += "active ";
    }
}