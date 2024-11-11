// Copy Button for Code Blocks
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach((block) => {
        const button = document.createElement("button");
        button.classList.add("copy-button");
        button.innerText = "Copy";
        block.appendChild(button);

        button.addEventListener("click", () => {
            const code = block.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => {
                    button.innerText = "Copy";
                }, 2000);
            });
        });
    });
});

// Toggle Navbar Functionality
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open");
}
