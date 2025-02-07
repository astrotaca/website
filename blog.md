---
layout: page
title: "Blog"
permalink: /blog/
---

## Latest Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date_to_string }})</small>
    </li>
  {% endfor %}
</ul>
