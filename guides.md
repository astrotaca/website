---
layout: default
title: "Guides"
permalink: /guides/
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
      <h2>Guides Overview</h2>
      <p>Explore our guides on astrophotography techniques and gear.</p>

      <div class="card-grid">
        {% for post in site.posts %}
          <a class="card" href="{{ post.url | relative_url }}">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}">
            {% else %}
              <img src="https://via.placeholder.com/600x400/222222/ffffff?text=Guide" alt="{{ post.title }}">
            {% endif %}
            <div class="card-content">
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            </div>
          </a>
        {% endfor %}
      </div>
    </main>
  </div>
</div>
