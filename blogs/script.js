// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Copy Button for Code Blocks
    document.querySelectorAll("pre").forEach((block) => {
        const button = document.createElement("button");
        button.classList.add("copy-button");
        button.innerText = "Copy";
        block.appendChild(button);

        // Copy code to clipboard on button click
        button.addEventListener("click", () => {
            const code = block.querySelector("code").innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => {
                    button.innerText = "Copy";
                }, 2000); // Reset button text after 2 seconds
            });
        });
    });

    // Navbar Toggle Functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.getElementById("side-menu");

    // Check if elements exist to prevent errors on pages without the menu
    if (menuToggle && sideMenu) {
        menuToggle.addEventListener("click", () => {
            sideMenu.classList.toggle("open"); // Toggle open class to show/hide the sidebar
        });
    }
    const scrollbarThumb = document.getElementById("scrollbarThumb");

    // Generate dots based on the page height
    const totalDots = 60; // Adjust the number of dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("scroll-dot");
        scrollbarThumb.appendChild(dot);
    }

    // Get all dots for easy access
    const dots = document.querySelectorAll(".scroll-dot");

    // Function to update dot visibility based on scroll position
    function updateDots() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollRatio = window.scrollY / scrollableHeight;
        const visibleDots = Math.ceil(scrollRatio * dots.length);

        dots.forEach((dot, index) => {
            dot.style.opacity = index < visibleDots ? "1" : "0.3";
        });
    }

    // Update dots on scroll and on load
    window.addEventListener("scroll", updateDots);
    updateDots();

    const images = document.querySelectorAll("img");
    const zoomOverlay = document.getElementById("zoom-overlay");
    const zoomImage = document.getElementById("zoom-image");
    const closeZoom = document.getElementById("close-zoom");

    // Click event to zoom in on image
    images.forEach((image) => {
        image.addEventListener("click", function () {
            zoomImage.src = this.src; // Set the src of the zoomed image
            zoomOverlay.style.display = "flex"; // Show the overlay
        });
    });

    // Click event to close the zoomed image
    closeZoom.addEventListener("click", function () {
        zoomOverlay.style.display = "none"; // Hide the overlay
        zoomImage.src = ""; // Clear the zoomed image source
    });

    // Optional: Close overlay if clicking outside the image
    zoomOverlay.addEventListener("click", function (e) {
        if (e.target === zoomOverlay) {
            zoomOverlay.style.display = "none";
            zoomImage.src = "";
        }
    });
});


