document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");
        setTimeout(() => {
            button.classList.remove("clicked");
        }, 200);
    });
});
.clicked {
    transform: scale(1.1);
    background-color: #0056b3;
}
