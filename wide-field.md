---
layout: page
title: "Wide Field Guides"
permalink: /wide-field/
seo_description: "Explore wide field astrophotography guides for capturing expansive night skies."
seo_keywords: "wide field, astrophotography, guides"
tags: [wide-field, astrophotography, milky-way, landscapes, night-sky, wide-angle, star-trails, astro, panoramic, long-exposure, cosmic, deep-sky, celestial, expansive]
---

<h2>Wide Field Guides</h2>
<p>Experience expansive views of the Milky Way and star-filled skies with our wide field guides.</p>

<!-- Introduction Block -->
<div class="topic-intro">
  <p>
    Wide field astrophotography lets you capture the vast, awe-inspiring beauty of the night sky. Our guides cover techniques for shooting expansive vistas of the Milky Way, star trails, and panoramic celestial scenes. Discover the tips and tricks you need to capture stunning wide field images.
  </p>
</div>

<div class="featured-grid">
  {% assign wide_field_guides = site.posts | where_exp:"post", "post.tags contains 'wide-field'" | sort:"date" | reverse %}
  {% if wide_field_guides.size > 0 %}
    {% for post in wide_field_guides %}
      {% assign previewImage = post.image %}
      {% if previewImage == nil or previewImage == "" %}
         {% assign guideData = site.data.guides | where:"url", post.url | first %}
         {% if guideData and guideData.image %}
            {% assign previewImage = guideData.image %}
         {% else %}
            {% assign previewImage = "/assets/images/default-guide.jpg" %}
         {% endif %}
      {% endif %}
      <a class="featured-card" href="{{ post.url | relative_url }}">
         <img src="{{ previewImage | relative_url }}" alt="{{ post.title }}">
         <div class="featured-content no-bg">
           <h3>{{ post.title }}</h3>
           <p>
             {% if post.description %}
               {{ post.description }}
             {% else %}
               {{ post.excerpt | strip_html | truncate: 150 }}
             {% endif %}
           </p>
         </div>
      </a>
    {% endfor %}
  {% else %}
    <p>No wide field guides found.</p>
  {% endif %}
</div>
