---
layout: default
title: "Guides"
permalink: /guides/
hero_image: "/assets/images/hero-guides.jpg"  # Replace with your desired hero image for the Guides page
---

<!-- Hero Section -->
{% if page.hero_image %}
<div class="page-hero" style="background-image: url('{{ page.hero_image | relative_url }}');" data-aos="fade-in">
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <h1>{{ page.title }}</h1>
  </div>
</div>
{% else %}
<div class="page-hero" data-aos="fade-in">
  <div class="hero-overlay"></div>
  <div class="hero-text">
    <h1>{{ page.title }}</h1>
  </div>
</div>
{% endif %}

<!-- Guides Overview Section -->
<div class="content-container">
  <main class="main-content">
    <h2>Guides Overview</h2>
    <p>Explore our guides on astrophotography techniques and gear.</p>

    <!-- Featured Guides Grid -->
    <div class="card-grid">
      {%- for post in site.posts -%}
        <!-- Begin Featured Guide Card -->
        <a class="card" href="{{ post.url | relative_url }}">
          {%- if post.image -%}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          {%- else -%}
            <img src="https://via.placeholder.com/600x400/222222/ffffff?text=Guide" alt="{{ post.title }}">
          {%- endif -%}
          <div class="card-content">
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          </div>
        </a>
        <!-- End Featured Guide Card -->
      {%- endfor -%}
    </div>
  </main>
</div>
