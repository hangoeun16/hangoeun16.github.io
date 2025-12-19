---
layout: page
permalink: /courses/
title: courses
description: Lecture notes from courses
nav: true
nav_order: 5
---

{% assign course_indexes = site.courses | where: "type", "course_index" %}

{% for course in course_indexes %}

<h4 class="course-title">
  {{ course.title }}
</h4>

{% if course.instructor %}
<p><strong>Instructor:</strong> {{ course.instructor }}</p>
{% endif %}

{% if course.semester %}
<p>{{ course.semester }}</p>
{% endif %}

{% if course.institution %}
<p>{{ course.institution }}</p>
{% endif %}

<div class="course-description">
  {{ course.content }}
</div>

{% assign lectures = site.courses
   | where: "type", "lecture"
   | where: "course", course.course
   | sort: "date" %}
{% if lectures.size > 0 %}
<h5 class="lecture-notes-title">Lecture Notes</h5>
<ol>
  {% for lecture in lectures %}
  <li>
    <a href="{{ lecture.url | relative_url }}">
      {{ lecture.title }} ({{ lecture.date | date: "%b %-d, %Y" }})
    </a>
  </li>
  {% endfor %}
</ol>
{% endif %}

{% endfor %}
