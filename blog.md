---
layout: page
title: "Blog"
permalink: /blog/
hero_image: "https://via.placeholder.com/1600x400/222222/ffffff?text=AstroTaca+Blog"
seo_description: "AstroTaca Blog - Astrophotography articles & tutorials"
seo_keywords: "astronomy blog, astrophotography tutorials, astro guides"
---

<h2>Latest Blog Posts</h2>
<p>Check out our articles below!</p>

<div class="card-grid">
  {% for post in site.posts %}
    <a class="card" href="{{ post.url }}">
      <img src="https://via.placeholder.com/600x400/555555/ffffff?text={{ post.title | escape }}" alt="{{ post.title }}">
      <div class="card-content">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </div>
    </a>
  {% endfor %}
</div>
