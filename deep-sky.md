---
layout: page
title: "Deep Sky Guides"
permalink: /deep-sky/
seo_description: "Explore our deep sky guides and astrophotography tips."
seo_keywords: "deep sky, astrophotography, guides"
tags: [deep-sky, nebula, galaxies, star-clusters, cosmic, astrophotography, telescopes, long-exposure, dark-sky, milky-way, astro, celestial, deep-space]
---

<h2>Deep Sky Guides</h2>
<p>Explore our in-depth deep sky guides for capturing nebulae, galaxies, and star clusters.</p>

<div class="featured-grid">
  {% assign deep_sky_guides = site.posts | where_exp:"post", "post.tags contains 'deep-sky'" | sort:"date" | reverse %}
  {% if deep_sky_guides.size > 0 %}
    {% for post in deep_sky_guides %}
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
    <p>No deep sky guides found.</p>
  {% endif %}
</div>
