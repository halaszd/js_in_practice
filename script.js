// Best practice:
// a getElementById a leggyorsabb, ezt használjuk, ha lehet.
// ha nem lehet, akkor a querySelector() / querySelectorAll()-t használjuk
// nem minden node element

// a let blockon belül jön létre és ott is marad
// var kikúszik a blockból

// Loading window
function _load() {
    // console.log("hello world");
    
    const rootElement = document.getElementById("root");
    // console.log(rootE);

    rootElement.classList.add("loaded");

    // console.log(window);
    // console.log(document);
    // console.log(rootE.classList);

    // btn class nevű classát töröljük ki
    rootElement.innerHTML = `
        <button class="btn">Click on me!</button>
        <button class="btn">Click on me!</button>
        <button class="btn">Click on me!</button>
        <button class="btn">Click on me!</button>
        <button class="btn">Click on me!</button>
    
    `;
    document.querySelector(".btn").classList.remove("btn");
    buttonElementsQ = document.querySelectorAll("button");
    // document.querySelector("button").classList.add("btn");

    // A button-t így is létre lehetne hozni:
    // button = document.createElement("button");
    // button.textContent = "Click on me!";
    // rootE.appendChild(button)

    // Putting 10 pictures in the root
    for(let i = 0; i <= 10; i++){
        // rootE.innerHTML += `<img src="./img/${i+1}.png">`;

        // VAGY

        // a createElement-tel nem igazán fogunk dolgoznji
        // let imgElement = document.createElement("img");
        // imgElement.setAttribute("src", `${i+1}.png`);
        // rootElement.appendChild(imgElement);

        // VAGY -> Best practice:
        imgElement = `
            <img src="./img/${i+1}.png">    
        `;
        rootElement.insertAdjacentHTML("beforeend", imgElement);
    }

    let inputElement = `
        <input placeholder="Write your name here" />
    `;

    for(let i = 0; i < buttonElementsQ.length; i++) {
        // a += újrarendereli az innerHtml-t, ezért nem a legjobb
        // rootE.innerHTML += inputE;

        rootElement.insertAdjacentHTML("beforeend", inputElement);
    }
}


window.addEventListener("load", _load);