---
layout: page
permalink: /lit_review/
title: Lit Review
description: >
nav: true
nav_order: 5
---

A light literature review of the papers that I've read in detail. 


---

<ol>
    {% for lit_review in site.lit_review reversed %}
    <li>
        <a href="{{ lit_review.url | relative_url }}">
            ({{ lit_review.date | date: '%b %-d, %Y' }})
            {{ lit_review.title }}
        </a>
    </li>
    {% endfor %}
</ol>
