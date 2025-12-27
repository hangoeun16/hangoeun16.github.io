---
layout: lit_review
title: "A Description Logic Primer"
giscus_comments: true
date: 2025-12-26
bib_id: descriptionlogicprimer
---

### Why & How I Found This
While working through the [Introduction to Knowledge Graphs](https://github.com/city-knowledge-graphs/phd-course/blob/main/lectures/phd-course-kgs-aalborg-session-1-intro.pdf), I encountered description logics and semantics for the first time. Since these concepts were entirely new to me, I sought supplementary resources to build a foundational understanding. As I explored various materials, I became particularly intrigued by the use of formal mathematical languages for proving—grammars were my favourite part of mathematics. I found the formal languages used in description logics fascinating.

### Introduction
### Basic Building Blocks of DL Ontologies
{% include figure.liquid path="/assets/img/posts/DL/dl.jpeg" %}
DL ontologies are based on three building blocks:
  1. concepts: set of individuals $\rightarrow$ Mother: set of all mothers
  2. roles: binary relationship between individuals  $\rightarrow$ parentOf: relationship between parent and their children
  3. individual names: represent single individuals in the domain  $\rightarrow$ julia: an individual Julia

Each of these terms is similar to uniary predicates, binary predicates, and constants of FOL, respectively.

- DL ontology
  - fully describes situation (x)
  - consists of set of statements (o)
    - = axioms

**axiom** is a set of statement such that it captures *partial* knowledge about described situation.
It is generally separated into three types. 

{% include figure.liquid path="/assets/img/posts/DL/axiom.jpeg" %}
