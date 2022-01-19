////////////  COPYRIGHT ©  /////////////
//                                    //
//     Made by: Miljan Pantovic ©     //
//      But who actually cares.       //
//                                    //
////////////////////////////////////////

import { allMovies, crConsole } from "./class_creation.js"; // Exported array of movies.

// Declarations if deeded:
let content = document.querySelector(".content"); // whole content in the middle
let headline = document.querySelector(".headline"); // text that says "Added movies" in the top
let btn1 = document.querySelector(".btn1"); // text that says "Added movies" in the top
let btn2 = document.querySelector(".btn2"); // text that says "Added movies" in the top
//

allMovies.sort(() => 0.5 - Math.random()) // Randomizing an array with movies
// allMovies.sort((a,b) => b.ocena - a.ocena) // Od max ocene ka min ocene

headline.innerText = `Added movies: ${allMovies.length}` // giving healine the correct amount of movies
crConsole(); // Console logging my info

let getAllMovies = arr => { // Main function that creates elements / appends / sets classes and attributes
    let brojac = 0;
    arr.forEach(el => {
        brojac++;
        let newDiv = document.createElement("div");
        newDiv.classList.add("divClass");
        let newP = document.createElement("p");
        newP.innerText = `${el.text}`;
        newP.classList.add("pNaslov");
        let newImg = document.createElement("img");
        newImg.src = `${el.slika}`;
        newImg.classList.add("coverImg")
        let newOcene = document.createElement("p");
        newOcene.innerText = `${el.ocena}★`
        let newAnchor = document.createElement("a");
        newAnchor.href = `${el.linkic}`
        newAnchor.target = "_blank"
        // Bas me je mrzelo da diram css pa sam samo stavio attribute ovde za P sa ocenama...
        newOcene.setAttribute("style", "text-align: center; font-weight:bold; font-size: 20px; color:red;")
        newAnchor.appendChild(newImg);
        newDiv.appendChild(newP);
        newDiv.appendChild(newAnchor);
        newDiv.appendChild(newOcene);
        content.appendChild(newDiv);
    })
};
getAllMovies(allMovies); // executing main function for displaying all Movies

let allImgez = document.querySelectorAll("img"); // Node list of All images on the page

btn1.disabled = true; // first button disables
btn1.addEventListener("click", function () { // button "on" that sets class for img fit
    btn1.disabled = true;
    btn2.disabled = false;
    allImgez.forEach(el => {
        el.classList.add("coverImg")
    })
});

btn2.addEventListener("click", function () { // button "off" that removes class for img fit
    btn2.disabled = true;
    btn1.disabled = false;
    allImgez.forEach(el => {
        el.classList.remove("coverImg")
    })
});