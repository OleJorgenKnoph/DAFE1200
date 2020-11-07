/*-------------------------------------------------*/
/*MAKING THE MENULINK ACTIVE DEPENDING ON WHERE ON SITE THE USER IS*/

/*when the windown scrolls, the function starts*/
window.onscroll = function() {selectActiveSite()};

function selectActiveSite() {

/*gathering all the elements*/
    let mainLink = document.getElementsByClassName("main")[0];
    let challengeLink = document.getElementsByClassName("challenge")[0];
    let solutionLink = document.getElementsByClassName("solution")[0];
    let appLink = document.getElementsByClassName("app")[0];

    /*if the window is scrolled down furter than 300vh (3times the screen height)*/
    if (window.scrollY > window.innerHeight * 2.9 ) {

        /*active class added app*/
            appLink.classList.add("active");

            /*active class removed from the others so its only 1 link active*/
                solutionLink.classList.remove("active");
                challengeLink.classList.remove("active");
                mainLink.classList.remove("active");
    }
        else if (window.scrollY > window.innerHeight * 1.9) {

            solutionLink.classList.add("active");

        mainLink.classList.remove("active");
        challengeLink.classList.remove("active");
        appLink.classList.remove("active");
        }
            else if (window.scrollY > window.innerHeight) {
                challengeLink.classList.add("active");

        mainLink.classList.remove("active");
        solutionLink.classList.remove("active");
        appLink.classList.remove("active");
            }
                else if (window.scrollY > 0 ) {
                    mainLink.classList.add("active");

        challengeLink.classList.remove("active");
        solutionLink.classList.remove("active");
        appLink.classList.remove("active");
                }
}

/*-------------------------------------------------*/
/*MAKING THE MENULINK ON CHALLENGE SITE ACTIVE DEPENDING ON WHERE THE USER IS*/

let challengeIntro = document.getElementsByClassName("intro")[0];
let challengeDescription = document.getElementsByClassName("description")[0];
let challengeVisibility = document.getElementsByClassName("visibility")[0];
/*let challengeMenu = document.getElementsByClassName("site1MenuLi")[0];*/

   /* challengeMenu.addEventListener("click", selectActiveSiteChallenge());*/


/*function selectActiveSiteChallenge() {*/


    /*if the window is scrolled down furter than 200vh (2times the screen height) and horizontal
    * more than 200vw*/
    if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > window.innerWidth * 1.9) {

        /*active class added visibility*/
        challengeVisibility.classList.add("active1");

        /*active class removed from the others so its only 1 link active*/
        challengeDescription.classList.remove("active1");
        challengeIntro.classList.remove("active1");

    }
        else if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > window.innerWidth) {

            challengeDescription.classList.add("active1");

            challengeIntro.classList.remove("active1");
            challengeVisibility.classList.remove("active1");
        }
            else if (window.scrollY > window.innerHeight * 1.9 && window.scrollX > 0) {
                challengeIntro.classList.add("active1");

                challengeVisibility.classList.remove("active1");
                challengeDescription.classList.remove("active1");
            }

/*}*/