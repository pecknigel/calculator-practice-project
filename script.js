'use strict';

// Log something so we know we're awake
console.log("Calculator script loaded");

// Use bad practice (getting data from the DOM) to make the buttons log something
// Remove this code before you start
for (const btn of document.querySelectorAll("button")) {
    btn.addEventListener("click", e => {
        console.log(`Button "${e.target.innerText}" clicked`);
    });
}

/*

   Over to you...
   
   Get a cup of tea, see what you can do.
   
   See README.md and TASKS.md for some guidance or book a session with Nigel on Preply.
   
*/
