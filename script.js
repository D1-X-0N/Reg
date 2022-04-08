"use strict";
let Elp = document.querySelector("p");
let src = Elp.textContent;
const reg = /(\B'|'\B)/gm

let modifyText=(str) => {
    Elp.textContent = str.replace(reg, '"');
}

modifyText(src);