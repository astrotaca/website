---
layout: page
title: "Guides"
permalink: /guides/
hero_image: "https://via.placeholder.com/1600x400/222222/ffffff?text=AstroTaca+Guides"
seo_description: "AstroTaca Guides - Astrophotography articles & tutorials"
seo_keywords: "astrophotography guides, astro tutorials, astrophotography articles"
---

<div class="guides-container">
  <h2>Latest Blog Posts</h2>
  <p>Check out our articles below!</p>

  <div class="card-grid">
    {% for post in site.posts %}
      <a class="card guide-post" href="{{ post.url }}">
        <img src="https://via.placeholder.com/600x400/555555/ffffff?text={{ post.title | escape }}" alt="{{ post.title }}">
        <div class="card-content">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
        </div>
      </a>
    {% endfor %}
  </div>
</div>

