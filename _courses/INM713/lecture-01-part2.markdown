---
layout: course-lecture
title: "Introduction to Knowledge Graphs (2): OWL-based Knowledge Graphs"
course: INM713         
type: lecture
date: 2025-12-20
giscus_comments: true
toc:
  sidebar: left
---

[Lecture Slide](https://github.com/city-knowledge-graphs/phd-course/blob/main/lectures/phd-course-kgs-aalborg-session-1-intro.pdf)

Note: This is my own interpretation based on self-study of the lecture slides. While I've tried to be accurate, some of my commentary and understanding may be imperfect. 

#### Ontology


Consider the first example. 
KG Triples :london :location :england
DL Syntax: location (london, england)
Semantics <$\text{london^{I}}, \text{england^{I}}$> $\in$ $\text{location}^{I}$

| Layer | Representation | Reads as |
|-------|----------------|----------|
| Storage | :london :location :england | edge from london to england labeled location |
| Logic | location(london, england) | london and england satisfy the location relation |
| Representation | $\langle \text{london}^I, \text{england}^I \rangle \in \text{location}^I$ | In this interpretation, London-England pair belongs to location relationships |

#### OWL 2 Entities
##### classes and individuals
owl:Class is used to represent classes, which is a set of individuals.
owl:NamedIndividual is used to represent individuals.

##### Top and Bottom Classes

#### Things to Add
1. visualisation of OWL 2 entities


#### References
1. [Lecture Slide](https://github.com/city-knowledge-graphs/phd-course/blob/main/lectures/phd-course-kgs-aalborg-session-1-intro.pdf)
2. [OWL Web Ontology Language Reference](https://www.w3.org/TR/owl-ref/)
3. [Description Logics](https://www.cs.ox.ac.uk/people/ian.horrocks/Publications/download/2014/KrSH14.pdf)
4. [Description Logics:ALC](https://www2.cs.sfu.ca/CourseCentral/411/jim/DL.ALC.pdf)
