---
layout: page
permalink: /courses/
title: courses
description: Lecture-by-lecture notes from courses 
nav: true
nav_order: 5
---
{% assign courses_by_folder = site.courses
  | group_by_exp: "course", "course.path | split: '/' | slice: 2 | first" %}
{% for course_group in courses_by_folder %}
  {% assign course_index = course_group.items | where: "type", "course_index" | first %}
  {% assign lectures = course_group.items | where: "type", "lecture" | sort: "date" %}
  
{% if course_index %}
<h2>
      <a href="{{ course_index.url | relative_url }}">
        {{ course_index.title }}
      </a>
</h2>

    <div class="course-description">
      {{ course_index.content }}
    </div>

{% if lectures and lectures.size > 0 %}
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
  {% endif %}
{% endfor %}
