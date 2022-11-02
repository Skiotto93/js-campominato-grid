"use strict";
const boardContainer = document.querySelector(".board");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");



const start = document.querySelector(".start-button");
start.addEventListener('click', function () {
    for ( let i = 1; i <= 100; i++ ) {
        const boardCell = document.createElement("div");
        boardCell.innerHTML = i;
        boardCell.classList.add("board-cell-100");
        boardCell.addEventListener('click', function() {
            boardCell.classList.add("color-add")
            console.log(this.innerHTML);
        }       
        );
        boardContainer.append(boardCell);
    };
    if 
}
) 