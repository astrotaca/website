---
layout: default
---

<div class="page-content container" data-aos="fade-up">

  {% if page.hero_image %}
    <div class="page-hero" style="background-image:url('{{ page.hero_image }}');" data-aos="fade-in">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1>{{ page.title }}</h1>
      </div>
    </div>
  {% endif %}

  <div class="content-container">
    <main class="main-content">
      <p><small>Published on {{ page.date | date: '%B %d, %Y' }}</small></p>
      <hr />
      
      <div class="post-content">
        <!-- Fix broken images with JS -->
        <script>
          document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".post-content img").forEach(img => {
              img.onerror = function () {
                this.style.display = "none";  // Hide broken images
              };
            });
          });
        </script>

        {{ content }}
      </div>
    </main>

    <!-- Sidebar (Now only contains sidebar elements, no duplicate nav) -->
    <aside class="right-sidebar">
      <div class="sidebar-inner">
        <h2>Navigation</h2>
        <ul>
          <li><a href="/about/">About</a></li>
          <li><a href="/products/">Products</a></li>
          <li><a href="/drivers/">Drivers/Software</a></li>
          <li><a href="/guides/">Guides</a></li>
        </ul>
      </div>
    </aside>

</div>
