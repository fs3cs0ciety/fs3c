document.addEventListener("DOMContentLoaded", async function() {
    // GitHub Repositories Section
    const reposContainer = document.getElementById("repos-container");
    if (reposContainer) {
        const username = "fs3cs0ciety";
        reposContainer.textContent = "Fetching repositories...";

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            if (!response.ok) throw new Error("Failed to fetch repositories");

            const repos = await response.json();
            reposContainer.innerHTML = "";

            repos.slice(0, 6).forEach(repo => {
                const repoElement = document.createElement("div");
                repoElement.classList.add("repo");

                repoElement.innerHTML = `
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description || "No description provided"}</p>
                    <p>⭐ ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
                `;

                reposContainer.appendChild(repoElement);
            });
        } catch (error) {
            reposContainer.textContent = "Failed to load repositories.";
            console.error("Error loading repositories:", error);
        }
    } else {
        console.warn("Warning: 'repos-container' element not found.");
    }

    // Blog Posts Data
    const allPosts = [
        { title: "The Real Intro to Arch Linux", url: "blogs/post1.html", date: "2024-10-15" },
        { title: "The Real Intro to Windows", url: "blogs/post5.html", date: "2024-10-20" },
        { title: "Tracking Down Rootkits", url: "blogs/post2.html", date: "2024-11-01" },
        { title: "Debugging with GDB and GEF", url: "blogs/post3.html", date: "2024-11-05" },
        { title: "Exploring Kernel Exploits", url: "blogs/post4.html", date: "2024-11-08" }
    ];

    // Render Recent Blogs
    const renderRecentBlogs = () => {
        const recentBlogsContainer = document.getElementById("recent-blogs-container");

        if (recentBlogsContainer) {
            recentBlogsContainer.innerHTML = "";

            const sortedBlogs = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            sortedBlogs.slice(0, 5).forEach(blog => {
                const blogElement = document.createElement("div");
                blogElement.classList.add("blog-post");
                
                blogElement.innerHTML = `
                    <a href="${blog.url}" target="_blank">${blog.title}</a>
                    <p class="post-date">${new Date(blog.date).toLocaleDateString()}</p>
                `;
                
                recentBlogsContainer.appendChild(blogElement);
            });
        } else {
            console.warn("Warning: 'recent-blogs-container' element not found.");
        }
    };

    renderRecentBlogs();

    // Render All Blog Posts
    const renderAllPosts = () => {
        const allPostsContainer = document.getElementById("all-posts-container");

        if (allPostsContainer) {
            allPostsContainer.innerHTML = "";

            const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            sortedPosts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("blog-post");

                postElement.innerHTML = `
                    <a href="${post.url}" target="_blank">${post.title}</a>
                    <p class="post-date">${new Date(post.date).toLocaleDateString()}</p>
                `;

                allPostsContainer.appendChild(postElement);
            });
        } else {
            console.warn("Warning: 'all-posts-container' element not found.");
        }
    };

    // Only call renderAllPosts if we are on all-posts.html page
    if (document.getElementById("all-posts-container")) {
        renderAllPosts();
    }

    // Sidebar Toggle Functionality
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener("click", function() {
            sideMenu.classList.toggle("open");
        });

        document.addEventListener("click", function(event) {
            if (!sideMenu.contains(event.target) && event.target !== menuToggle) {
                sideMenu.classList.remove("open");
            }
        });
    } else {
        console.warn("Warning: 'menu-toggle' or 'side-menu' element not found.");
    }

    const scrollbarThumb = document.getElementById("scrollbarThumb");
    const totalDots = 60; // Set this to control the number of dots

    // Generate dots dynamically
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("scroll-dot");
        scrollbarThumb.appendChild(dot);
    }

    const dots = document.querySelectorAll(".scroll-dot");

    function updateDots() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollRatio = window.scrollY / scrollableHeight;
        const visibleDots = Math.min(dots.length, Math.ceil(scrollRatio * dots.length));

        dots.forEach((dot, index) => {
            if (index < visibleDots) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", updateDots);
    updateDots();
});
