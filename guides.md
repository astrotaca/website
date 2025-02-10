---
layout: page
title: "Guides"
permalink: /guides/
seo_description: "Browse our astrophotography guides"
seo_keywords: "astrophotography guides, imaging tutorials, astrophotography tips"
---

<h2>Our Guides</h2>
<p>Explore our guides on astrophotography techniques and gear.</p>

<div class="card-grid" data-aos="slide-up">
  {%- for post in site.posts -%}
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
  {%- endfor -%}
</div>
