---
layout: page
permalink: /summaries/
title: Lit Review
description: >
nav: true
nav_order: 5
---

A light literature review of the papers that I've read in detail. 

{% include scripts/mathjax_macros.html %}

---

<ol>
    {% for summary in site.summaries reversed %}
    <li>
        <a href="{{ summary.url | relative_url }}">
            ({{ summary.date | date: '%b %-d, %Y' }})
            {{ summary.title }}
        </a>
    </li>
    {% endfor %}
</ol>
