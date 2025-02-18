---
layout: default
title: "AstroTaca"
seo_description: "AstroTaca - Astrophotography Gear, Guides, and More"
seo_keywords: "astrophotography gear, EAF, flat panel, DC hub, astro guides"
hero_image: "/assets/images/hero.jpg"
---

<!-- Hero Section -->
{% if page.hero_image %}
<div class="hero" style="background-image: url('{{ page.hero_image }}');" data-aos="fade-in">
  <div class="hero-overlay" style="background: rgba(0,0,0,0.4);"></div>
  <div class="hero-content">
    <h1>{{ page.title }}</h1>
    <p>Astrophotography gear, guides, and more!</p>
  </div>
</div>
{% else %}
<div class="hero" data-aos="fade-in">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>{{ page.title }}</h1>
    <p>Astrophotography gear, guides, and more!</p>
  </div>
</div>
{% endif %}

<!-- Deep Sky Section (Image on the left) -->
<section class="info-section deep-sky-section">
  <div class="container">
    <div class="info-content" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
      <div class="info-image">
        <img src="/assets/images/deep-sky.jpg" alt="Deep Sky">
      </div>
      <div class="info-text">
        <h2>Deep Sky</h2>
        <p>
          Deep sky imaging is one of the most rewarding parts of astrophotography, but it comes with its challenges. From capturing faint details to getting the right processing workflow, there’s always something new to learn. These guides cover the basics and beyond, helping you get better results with each session.
        </p>
        <a href="/deep-sky/" class="hero-button white">Learn More</a>
      </div>
    </div>
  </div>
</section>

<!-- Processing Section (Image on the right) -->
<section class="info-section processing-section">
  <div class="container">
    <div class="info-content" style="flex-direction: row-reverse;" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
      <div class="info-image">
        <img src="/assets/images/processing.jpg" alt="Processing">
      </div>
      <div class="info-text">
        <h2>Processing</h2>
        <p>
          Processing is the key to transforming raw data into breathtaking astrophotography. By stacking images, reducing noise, and adjusting colors, you can reveal incredible details hidden in the night sky. Follow along as we explore techniques to improve your astrophotography step by step.
        </p>
        <a href="/processing/" class="hero-button white">Learn More</a>
      </div>
    </div>
  </div>
</section>

<!-- Wide Field Section (Image on the left) -->
<section class="info-section wide-field-section">
  <div class="container">
    <div class="info-content" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
      <div class="info-image">
        <img src="/assets/images/wide-field.jpg" alt="Wide Field">
      </div>
      <div class="info-text">
        <h2>Wide Field</h2>
        <p>
          Wide-field astrophotography is a great way to capture the night sky without the need for specialized gear. Whether you're shooting with a DSLR and a tripod or tracking with a star tracker, these guides will help you get sharper stars, better compositions, and more detailed nightscapes.
        </p>
        <a href="/wide-field/" class="hero-button white">Learn More</a>
      </div>
    </div>
  </div>
</section>

<!-- Unified Featured Block (Featured Articles & Products) -->
<section class="featured-block unified" data-aos="fade-up">
  <div class="container featured-container unified">
    <!-- Featured Articles -->
    <div class="featured-articles">
      <h2>Featured Articles</h2>
      <p>Check out our blog posts!</p>
      <div class="featured-grid">
        {% for guide in site.data.featured_guides %}
          <a class="featured-card" href="{{ guide.url | relative_url }}">
            <img src="{{ guide.image | relative_url }}" alt="{{ guide.title }}">
            <div class="featured-content">
              <h3>{{ guide.title }}</h3>
              <p>{{ guide.description }}</p>
            </div>
          </a>
        {% endfor %}
      </div>
    </div>

    <hr class="featured-divider">

    <!-- Featured Products -->
    <div class="featured-products">
      <h2>Featured Products</h2>
      <p>Take your setup to the next level!</p>
      <div class="featured-grid">
        <a class="featured-card" href="{{ '/products/flap-flat-panel/' | relative_url }}">
          <img src="{{ '/assets/images/flap-flat-panel.jpg' | relative_url }}" alt="AstroTaca Flap Flat Panel">
          <div class="featured-content">
            <h3>AstroTaca Flap Flat Panel</h3>
            <p>$200.00 &mdash; Reliable flat panel for your flats.</p>
          </div>
        </a>
        <a class="featured-card" href="{{ '/products/eaf/' | relative_url }}">
          <img src="{{ '/assets/images/eaf.jpg' | relative_url }}" alt="AstroTaca Electronic Auto Focuser">
          <div class="featured-content">
            <h3>AstroTaca Electronic Auto Focuser</h3>
            <p>$100.00 &mdash; Automated focusing for clear stars.</p>
          </div>
        </a>
        <a class="featured-card" href="{{ '/products/dc-hub/' | relative_url }}">
          <img src="{{ '/assets/images/dc-hub.jpg' | relative_url }}" alt="AstroTaca DC Hub">
          <div class="featured-content">
            <h3>AstroTaca DC Hub</h3>
            <p>$50.00 &mdash; Manage power distribution easily.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
