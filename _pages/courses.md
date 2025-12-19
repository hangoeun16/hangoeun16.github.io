---
layout: page
permalink: /courses/
title: courses
description: Lecture-by-lecture reflections from courses I'm taking
nav: true
nav_order: 5
---
<pre>{{ site.courses | inspect }}</pre>

{% assign courses_by_folder = site.courses | group_by_exp: "course", "course.path | split: '/' | slice: 1" %}

{% for course_group in courses_by_folder %}
  {% assign courses_by_folder = site.courses
  | group_by_exp: "course", "course.path | split: '/' | slice: 1 | first" %}
  {% assign lectures = course_group.items | where: "type", "lecture" | sort: "date" | reverse %}
  
  {% if course_index %}
    <h2>
      <a href="{{ course_index.url | relative_url }}">
        {{ course_index.title }}
      </a>
    </h2>
    
    <div class="course-description">
      {{ course_index.content }}
    </div>
    
    <h3>Lecture Notes</h3>
    <ol>
      {% for lecture in lectures %}
        <li>
          <a href="{{ lecture.url | relative_url }}">
            ({{ lecture.date | date: '%b %-d, %Y' }})
            {{ lecture.title }}
          </a>
        </li>
      {% endfor %}
    </ol>
  {% endif %}
{% endfor %}
