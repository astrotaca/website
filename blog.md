---
layout: default
title: "Blog"
permalink: /blog/
---

<h1>Blog Posts</h1>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a> 
    <small>({{ post.date | date_to_string }})</small>
  </li>
{% endfor %}
</ul>
