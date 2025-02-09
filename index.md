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


<!-- Featured Articles -->
<section class="home-intro" data-aos="fade-up">
  <h2>Featured Articles</h2>
  <p>Check out our blog posts!</p>
  <div class="featured-grid">

    <!-- Featured Card 1: PixInsight Noise Reduction -->
    <a class="featured-card" href="{{ '/blog/noise-reduction/' | relative_url }}">
      <img src="https://via.placeholder.com/600x400/2f2f2f/ffffff?text=PixInsight+Noise+Reduction" alt="PixInsight Noise Reduction"/>
      <div class="featured-content">
        <h3>PixInsight Noise Reduction</h3>
        <p>Optimize your astrophotography images with advanced noise reduction techniques.</p>
      </div>
    </a>
    
    <!-- Featured Card 2: Comparison of Stacking Algorithms -->
    <a class="featured-card" href="{{ '/blog/stacking-algorithms/' | relative_url }}">
      <img src="{{ '/assets/images/stacking-algorithms.jpg' | relative_url }}" alt="Comparison of Stacking Algorithms"/>
      <div class="featured-content">
        <h3>Comparison of Stacking Algorithms</h3>
        <p>Discover the best stacking techniques for enhancing your astrophotography workflow.</p>
      </div>
    </a>
    
    <!-- Featured Card 3: Beginner Astro Tips -->
    <a class="featured-card" href="{{ '/blog/beginners-astro-tips/' | relative_url }}">
      <img src="{{ '/assets/images/beginners-astro-tips.jpg' | relative_url }}" alt="Beginner Astro Tips"/>
      <div class="featured-content">
        <h3>Beginner Astro Tips</h3>
        <p>Essential guidance for new astrophotographers.</p>
      </div>
    </a>
    
  </div>
</section>

<!-- Featured Products -->
<section class="home-intro" data-aos="fade-up">
  <h2>Featured Products</h2>
  <p>Take your setup to the next level!</p>
  <div class="featured-grid">
    <a class="featured-card" href="{{ '/products/flap-flat-panel/' | relative_url }}">
      <img src="https://via.placeholder.com/600x400/333333/ffffff?text=Flat+Panel" alt="Flap Flat Panel">
      <div class="featured-content">
        <h3>AstroTaca Flap Flat Panel</h3>
        <p>$200.00 &mdash; Reliable flat panel for your flats.</p>
      </div>
    </a>
    <a class="featured-card" href="{{ '/products/eaf/' | relative_url }}">
      <img src="https://via.placeholder.com/600x400/3a3a3a/ffffff?text=Auto+Focuser" alt="Electronic Auto Focuser">
      <div class="featured-content">
        <h3>AstroTaca Electronic Auto Focuser</h3>
        <p>$350.00 &mdash; Automated focusing for clear stars.</p>
      </div>
    </a>
    <a class="featured-card" href="{{ '/products/dc-hub/' | relative_url }}">
      <img src="https://via.placeholder.com/600x400/444444/ffffff?text=DC+Hub" alt="DC Hub">
      <div class="featured-content">
        <h3>AstroTaca DC Hub</h3>
        <p>$120.00 &mdash; Manage power distribution easily.</p>
      </div>
    </a>
  </div>
</section>
