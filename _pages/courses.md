---
layout: page
permalink: /courses/
title: courses
description: Lecture-by-lecture notes from courses
nav: true
nav_order: 5
---

{% comment %}
Get all course index docs (one per course)
{% endcomment %}
{% assign course_indexes = site.courses | where: "type", "course_index" %}

{% for course in course_indexes %}

<h2>
  <a href="{{ course.url | relative_url }}">
    {{ course.title }}
  </a>
</h2>

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

{% comment %}
Now find all lectures that belong to this course by matching the `course` key
{% endcomment %}
{% assign lectures = site.courses
   | where: "type", "lecture"
   | where: "course", course.course
   | sort: "date" %}

{% if lectures.size > 0 %}
<h3>Lecture Notes</h3>
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

<hr>
{% endfor %}
