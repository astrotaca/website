// === MOBILE MENU TOGGLE ===
function toggleMenu(){
  const nav = document.getElementById("nav-menu");
  const icon = document.querySelector(".menu-icon i");

  if(nav.classList.contains("open")){
    nav.classList.remove("open");
    icon.classList.remove("active");
  } else {
    nav.classList.add("open");
    icon.classList.add("active");
  }
}

// Close menu if clicked outside
document.addEventListener("click", function(e){
  const nav = document.getElementById("nav-menu");
  const menuIcon = document.querySelector(".menu-icon");
  if(!nav.contains(e.target) && !menuIcon.contains(e.target)){
    nav.classList.remove("open");
    let icon = document.querySelector(".menu-icon i");
    if(icon) icon.classList.remove("active");
  }
});

// SEARCH DATA
const searchItems = [
  { name: "About", link: "/about/" },
  { name: "Products", link: "/products/" },
  { name: "Flap Flat Panel", link: "/products/flap-flat-panel/" },
  { name: "Auto Focuser (EAF)", link: "/products/eaf/" },
  { name: "DC Hub", link: "/products/dc-hub/" },
  { name: "Drivers/Software", link: "/drivers/" },
  { name: "Guides", link: "/guides/" },
  { name: "Blog", link: "/blog/" },
  { name: "Contact", link: "/contact/" },
  { name: "FAQ", link: "/faq/" },
  // Blog examples
  { name: "LRGB Processing", link: "/blog/lrgb-processing/" },
  { name: "OSC vs. Mono Cameras", link: "/blog/osc-vs-mono/" },
  { name: "Beginner Astro Tips", link: "/blog/beginners-astro-tips/" },
  // "ASCOM" -> drivers
  { name: "ascom", link: "/drivers/" }
];

// TOGGLE SEARCH
function toggleSearch(){
  document.getElementById("search-input").focus();
}

// LIVE SEARCH
function liveSearch(){
  let input = document.getElementById("search-input").value.toLowerCase();
  let results = document.getElementById("search-results");
  results.innerHTML = "";

  if(input.length === 0){
    results.classList.remove('show');
    return;
  }
  let filtered = searchItems.filter(item => item.name.toLowerCase().includes(input));
  if(filtered.length > 0){
    filtered.forEach(item => {
      let li = document.createElement("li");
      li.innerHTML = `<a href="${item.link}" style="color:white;text-decoration:none;">${item.name}</a>`;
      results.appendChild(li);
    });
    results.classList.add('show');
  } else {
    results.classList.remove('show');
  }
}
document.addEventListener("click", function(e){
  let box = document.querySelector(".search-box");
  let list = document.getElementById("search-results");
  if(!box.contains(e.target)){
    list.classList.remove('show');
  }
});

// COOKIE BANNER
function setCookie(name, value, days){
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name){
  let cname = name + "=";
  let decoded = decodeURIComponent(document.cookie);
  let ca = decoded.split(';');
  for(let i=0; i<ca.length; i++){
    let c = ca[i].trim();
    if(c.indexOf(cname) == 0){
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}
function showCookieBanner(){
  let banner = document.getElementById("cookie-banner");
  if(!banner) return;
  if(!getCookie("cookieConsent")){
    banner.style.display = "flex";
  }
}
document.addEventListener("DOMContentLoaded", function(){
  showCookieBanner();
  let acceptBtn = document.getElementById("cookie-accept-btn");
  if(acceptBtn){
    acceptBtn.addEventListener("click", function(){
      setCookie("cookieConsent","true",365);
      document.getElementById("cookie-banner").style.display = "none";
    });
  }
});
