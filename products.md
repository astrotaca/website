---
layout: page
title: "Products"
permalink: /products/
hero_image: "https://via.placeholder.com/1600x400/222222/ffffff?text=AstroTaca+Products"
seo_description: "Browse AstroTaca's product catalog"
seo_keywords: "astrophotography products, flap panel, eaf, dc hub"
---

<h2>Our Products</h2>
<p>Click any item to learn more and purchase via PayPal.</p>

<div class="featured-grid">
  {% for product in site.data.products %}
    <a class="featured-card" href="{{ product.url | relative_url }}">
      <img src="{{ product.image | relative_url }}" alt="{{ product.title }}">
      <div class="featured-content no-bg">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </a>
  {% endfor %}
</div>
