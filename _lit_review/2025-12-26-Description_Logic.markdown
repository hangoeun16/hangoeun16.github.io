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

DL ontology  
→ fully describes situation (x)  
→ consists of set of statements (o) → axioms

**axiom** is a set of statement such that it captures *partial* knowledge about the described situation.
It is generally separated into three types. 

{% include figure.liquid path="/assets/img/posts/DL/axiom.jpeg" %}

### Asserting Facts with ABox Axioms
**ABox axiom**: capture <mark>knowledge</mark> about named individual.
1. where ind. belong to: concept assertion $\rightarrow$ Mother(julia)
2. ind.'s mutual rel: role assertion $\rightarrow$ parentOf(julia, john)

| ABox Axiom | Natural Language Interpretation | Precise Interpretation |
| ---------- | ------------------------------- | ---------------------- |
| Mother(julia) | Julia is a mother | individual *named* julia is an *instance* of the *concept* Mother |
| parentOf(julia, john) | Julia is a parent of John | individual *named* julia is related by parentOf to the individual *named* john |

Here, we should also consider that Julia and John are not different individuals. Intuitively, they are different individuals. However, we cannot simply assume that they are different individuals based on the axiom `parentOf(julia, john)`. This is because most DLs does not make *unique name assumption* (different name $\Longrightarrow$ different individual).

What we need to guarantee that unique name assumption is *individual inequality assertion* ($\not\approx$). This is functionally opposite of *individual equality assertion* ($\approx$).

For example,
  - julia $\not\approx$ john: Julia and John are different individuals.
  - julia $\approx$ john: Julia and John refer to the same individual. 

### Expressing Terminological Knowledge with TBox Axioms
**TBox axiom**: describe relationships between concepts (set of individuals).
The two simple TBox axioms are concept inclusion and concept equivalence. 

*Concept inclusion axioms* asserts one concept is a subconcept of the other.

Consider `Mother $\sqsubseteq$ Parent`:
  - natural language: all mothers are parents.
  - precise description: a concept Mother is *subsumed* by the concept Parent.

So, if we know `Mother(julia)` and `Mother $\sqsubseteq$ Parent' we can infer that `Parent(julia)` in other words, Julia is a parent. Notice that this ability to infer from the existing information is the characteristics of DL.

*Concept equivalence axioms* asserts two concepts have same instances.

Consider `Person $\equiv$ Human`:
  - natural language: all persons are human and vice versa.
  - precise description: a concept Person is *equivalent* to the concept Human.

While these TBox axioms are useful, there are many complex relationships. So, we employ other complex concept expressions. 

#### Boolean Concept Constructors

### References
1. [12.7.2 Unique Names Assumption](https://artint.info/html1e/ArtInt_302.html)
