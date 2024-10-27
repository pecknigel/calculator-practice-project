
console.log("Calculator script loaded");

for (const btn of document.querySelectorAll("button")) {
    btn.addEventListener("click", e => {
        console.log(`Button "${e.target.innerText}" clicked`);
    });
}
