// === TOGGLE MOBILE MENU ===
function toggleMenu() {
    let nav = document.getElementById("nav-menu");
    let icon = document.querySelector(".menu-icon i");

    // Toggle menu visibility
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        icon.classList.remove("active");
    } else {
        nav.classList.add("open");
        icon.classList.add("active");
    }
}

const searchItems = [
    // Regular pages
    { name: "Home", link: "/" },
    { name: "About", link: "/about/" },
    { name: "Blog", link: "/blog/" },
    { name: "Guides", link: "/guides/" },
    { name: "Products", link: "/products/" },
    { name: "Contact", link: "/contact/" },

    // Guides (Now they link inside /guides/)
    { name: "PixInsight Icon Setup", link: "/guides/#pixinsight-icon-setup" },
    { name: "Flats and Darks Tutorial", link: "/guides/#flats-and-darks-tutorial" },
    { name: "Stacking Workflow", link: "/guides/#stacking-workflow" },

    // Blog Posts
    { name: "How I Captured Andromeda", link: "/blog/capturing-andromeda/" },
    { name: "Best Filters for Nebulae", link: "/blog/best-nebula-filters/" },

    // Products
    { name: "AstroTaca Flap Flat Panel", link: "/products/flap-flat-panel/" },
    { name: "AstroTaca Electronic Auto Focuser", link: "/products/eaf/" },
    { name: "AstroTaca DC Hub", link: "/products/dc-hub/" }
];

// === TOGGLE SEARCH BOX ===
function toggleSearch() {
    let searchBox = document.querySelector(".search-box");
    let searchInput = document.getElementById("search-input");

    // Toggle search bar visibility
    if (searchBox.classList.contains("active")) {
        searchBox.classList.remove("active");
        searchInput.value = "";
        document.getElementById("search-results").style.display = "none";
    } else {
        searchBox.classList.add("active");
        searchInput.focus();
    }
}

// Close search when clicking outside
document.addEventListener("click", function(event) {
    let searchBox = document.querySelector(".search-box");
    if (!searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
        document.getElementById("search-results").style.display = "none";
    }
});

// Close search when clicking outside
document.addEventListener("click", function(event) {
    let searchBox = document.querySelector(".search-box");
    if (!searchBox.contains(event.target)) {
        searchBox.classList.remove("active");
        document.getElementById("search-results").style.display = "none";
    }
});


function liveSearch() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let resultsContainer = document.getElementById("search-results");

    // Clear previous results
    resultsContainer.innerHTML = "";
    
    if (input.length === 0) {
        resultsContainer.style.display = "none";
        return;
    }

    let filteredItems = searchItems.filter(item => item.name.toLowerCase().includes(input));

    if (filteredItems.length > 0) {
        resultsContainer.style.display = "block";
        filteredItems.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${item.link}" style="color:white;text-decoration:none;">${item.name}</a>`;
            resultsContainer.appendChild(li);
        });
    } else {
        resultsContainer.style.display = "none";
    }
}
