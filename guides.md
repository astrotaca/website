---
layout: page
title: "Guides"
permalink: /guides/
seo_description: "Browse our astrophotography guides"
seo_keywords: "astrophotography guides, imaging tutorials, astrophotography tips"
---

<h2>Our Guides</h2>
<p>Explore our guides on astrophotography techniques and gear.</p>

<div class="featured-grid">
  {% for guide in site.data.guides %}
    <a class="featured-card" href="{{ guide.url | relative_url }}">
      <img src="{{ guide.image | relative_url }}" alt="{{ guide.title }}">
      <div class="featured-content no-bg">
        <h3>{{ guide.title }}</h3>
        <p>{{ guide.description }}</p>
      </div>
    </a>
  {% endfor %}
</div>
