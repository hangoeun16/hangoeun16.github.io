---
layout: course-lecture
title: "Introduction to Knowledge Graphs (1): RDF-based Knowledge Graphs"
course: INM713         
type: lecture
date: 2025-12-19
giscus_comments: true
toc:
  sidebar: left
---

[Lecture Slide](https://github.com/city-knowledge-graphs/phd-course/blob/main/lectures/phd-course-kgs-aalborg-session-1-intro.pdf)

Note: This is my own interpretation based on self-study of the lecture slides. While I've tried to be accurate, some of my commentary and understanding may be imperfect. 

#### Data Graph
Data graph is the foundation of any knowledge graph. Its key property includes:
  - intuitive abstractions to capture entities and their relationship
  - do not require schema to start adding data $\to$ flexibility to assemble data from multiple sources
  -  enable queries over paths of arbitrary length
  - potential to correspond with logical unary and binary predicates.

The exemplary data graphs are directed edge-labelled (multi)graphs, property graphs, heterogeneous graphs (heterogeneous information within a node), hypergraphs (edges connecting a set of nodes), hypermodes (nested graphs in a node). Among these, the first two data graphs will commonly appear in this lecture.

##### Directed Edge-Labelled (Multi)Graphs
{% include figure.liquid path="/assets/img/posts/KG_1/directed_edge.jpeg" width="600px" %}

As seen from the figure above, 
  - $(Ernesto,Person) \neq (Person, Ernesto),$ which makes the graph "directed."
  - $(Ernesto,Person) \in E$ is labeled as "teaches," which makes the graph "edge-labelled"

##### Property Graph
A property graph is a graph such that for each information belongs to node, relationship, or property, where
  - node: tagged with one or more labels and can store any number of properties
  - relationship: directed, named connections between two nodes. 
  - property: key-value pair that provides an attribute

{% include figure.liquid path="/assets/img/posts/KG_1/property_graph.jpeg" width="600px" %}

For instance, in the figure above, Ernesto is a node and {type: Person} is a property of Ernesto, as it gives additional information that Ernesto is a person. 

#### RDF
Resource Description Framework
A **standardised data model** based on the **directed edge-labelled graph** model $\to$ facilitate data merging even when underlying schema differ. 

($c.f.$. web page is based on vision/audio that "people" need to understand information, 
RDF is based on framework that "computer program" can search/retrieve/analyse information.)

##### RDF Graph
RDF graph is a collection of **triples (subject, predicate, object)** which are also called as statement or fact, and 
the relationship between subject, predicate, and object follows typical English grammar and we usually denote the relationship 
as (subject) $\to$ (object) and use predicate to label the edge $\to.$

{% include figure.liquid path="/assets/img/posts/KG_1/triples.jpeg" %}

The right-side is the simple visualisation of the three triples in the left-side. Notice that ChalresIII is object in the triple (England, has king, ChalresIII) and the subject in the triple (CharlesIII, born year, 1948). It is not a problem at all, and this kind of situation frequently happens. 

While subject and object are nodes of the graph, node can be 3 different kinds.
  - resource (Internationalised/Uniform Resource Identifier): a concept that people/user/program want to describe. Unlike a blank node, it has a unique identifier.
  - literal: value such as string, number, date
  - blank node: a resource without unique identifier 



### References
1. [RDF vs. Property Graphs: Choosing the Right Approach for Implementing a Knowledge Graph](https://neo4j.com/blog/knowledge-graph/rdf-vs-property-graphs-knowledge-graphs/) 
2. [About: RDF Schema](https://dbpedia.org/page/RDF_Schema)
3. [OWL Web Ontology Language Reference](https://www.w3.org/TR/owl-ref/)
4. [Description Logics](https://www.cs.ox.ac.uk/people/ian.horrocks/Publications/download/2014/KrSH14.pdf)
5. [Description Logics:ALC](https://www2.cs.sfu.ca/CourseCentral/411/jim/DL.ALC.pdf)
6. [A data engineer's guide to semantic modelling](https://zenodo.org/records/3898519)
