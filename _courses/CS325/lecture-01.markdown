---
layout: course-lecture
title: "Symbols, concepts, and factss"
course: CS325       
type: lecture
date: 2026-01-01
giscus_comments: true
toc:
  sidebar: left
---

[Lecture Slide](https://courses.cs.northwestern.edu/325/readings/slides/concepts.html)

Note: This is my personal interpretation based on self-study of the lecture slides, notes, videos, and supplementary external resources. As a self-learner without formal enrollment or instructor feedback, my understanding, commentary, and connections between sources may be inaccurate or incomplete. Please refer to the official course materials for authoritative content

### Programming vs AI Programming
{% include figure.liquid path="/assets/img/posts/CS325/lec1/comp_chart.png" width="600px" caption="Source: Lecture Slide"%}

Programming concepts and AI Programming concepts are analogous but different in their semantic depth. 

{% include figure.liquid path="/assets/img/posts/CS325/lec1/cat.jpeg" width="600px" %}

Consider string `cat`.

This can be understood as a string value cat, which is a simple atomic data. The string itself does not encode semantic relationships. In other words, when given a string cat, the computer does not get its semantic meaning. 

However, when it comes to AI programming concept, it can be understood in the context of a symbol in a conceptual/hierarchical system such that cat is an mammal, which belongs to the animal. 


Formally speaking, their biggest differences are:
  1. all knowledge about domain is in data not code.
  2. code know about structure of a data (e.g. how properties are stored, how "is a" relationships are stroed)
  3. code has no reference to any domain concept. 


### Programming Language's Symbol



### LISP
Since this course's programming language is LISP, and I am not familiar about it, I did a quick search about it.
LISP is a programming language that satisfies the four criteria:
  1. use primitive data types: strings, numbers, arrays
  2. use operators: +, -, +, /, etc.
  3. use flow of control: if, or, and, while, for
  4. use input/output: le handling, loading, compiling programs
  5. specifically designed for symbolic programming

### References
1. [Symbolic Programming Example](https://cs.gmu.edu/~zduric/cs480/Slides/symb.pdf)
