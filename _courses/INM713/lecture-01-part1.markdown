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

##### Resource Identifier
We can use both Uniform Resource Identifier (URI) and International Resource Identifier (IRI) to identify our resource. While URI and IRI are similar, IRI can be understood as international version of URI: URI uses ASCII and IRI uses unicode, which allows broader support. 

##### URI
URI is a string of characters that identify particular resource, following the predefined set of syntax rules.

{% include figure.liquid path="/assets/img/posts/KG_1/youtube_link.jpeg" %}

URI generally follows the structure: 

`scheme:\[//authority\]path\[?query\]\[#fragment\](in brackets optional elements)`
  - scheme: tells how to access the resource 
  - authority: host of the resource. usually domain
  - path: specific resource in the host that the web client wants to access
  - query: string of information that the resource can use for some purpose
  - fragment: a subpart of a retrieved resource


Also, URI can be either hierarchical or opaque. 
{% include figure.liquid path="/assets/img/posts/KG_1/opaque.jpeg" %}

While a hierarchical URI is highly human-readable (by looking at URI, you can infer that Luke work for JediDepartment in mycompany), opaque URI does not give context to infer a relationship. Still, using an opaque URI is good for privacy and less stress for upkeep. Consider a case where Luke transferred to other department. Then, if we are using hierarchical URI, we should update the URI so that other people are not mislead; however, there is no need to do such a thing for the opaque URI. 

Still, there is a problem that is likely to arise for both type of URI, which is potentiality of URI being too long. When URI is long, it becomes hard to read and write, and thus cause problem. To resolve this issue we use abbreviation. 

The most common way to abbreviate URIs is by defining a prefix:
```
@prefix PREFIX_NAME: <BASE_URI/>
```
This means that we will replace <BASE_URI/> with PREFIX_NAME. For example, if we define `@prefix dbr: <http://dbpedia.org/resource/>`, we can now write `http://dbpedia.org/resource/London` $\to$ `dbr:London`. This shortened format is called a CURI (Compact URI) or QName (Qualified Name).

##### Literal
Literals are used to represent data values, and it can only appear in object position of a triple. This is beause literals are just values.

A literal in RDF can be of three types:
  - lexical form: simply saying a string type. always inside quotation (e.g. "London")
  - datatype IRI: specific IRI to indicate data type (e.g. ^^xsd:integer)
  - language tag: a two or three character code indicating language based on BCP 47 specification (e.g. "en")

Examples:

1. `dbr: London dbo:population "9,304,000"^^xsd:integer` $\Longleftrightarrow$ London's population is 9,304,000.
2. `dbr: London rdfs:label "Londres"@es $\Longleftrightarrow$ London is called Londres in Spanish.

##### Blank Nodes
Blank nodes are resources with URI. This happens when there is a lack of information about the resource, don't have an identifier, or the node isn't important enough to warrant a URI. Also, blank node can appear in subject and object of triples; however, it cannot appear as predicate position because it will be "too meaningless" and confusing. 

{% include figure.liquid path="/assets/img/posts/KG_1/blank_node.jpeg" %}

Let _:b1 represent the blank node. In the figure above, there are four triples total where _:b1 appears as the object once and as the subject three times:
1. (dbr:City_UoL, dbo:address, _:b1)
2. (_:b1, dbo:street, "Northampton Square")
3. (_:b1, dbo:place, "London")
4. (_:b1, dbo:postcode, "EC1V OHB")

| What we know about `_:b1` | What we do not know  about `_:b1` |
|---------------------------------|----------------------------------------|
| It is a resource/object in the RDF graph. | We don't know URI  |
| It is the `dbo:address` of `dbr:City_UoL`. | We cannot reference it outside the graph. |
| It has properties: street, place, postcode. | We cannot tell if it is the same as a node in another graph. |
| It holds values like `"London"` and a postcode. | We don't know its real identity or name.|
| It exists only within the current RDF graph. | We don't know if it represents a unique real-world resource. |



### Something to Add
1. representing `dbr: London dbo:population "9,304,000"^^xsd:integer` and `dbr: London rdfs:label "Londres"@es in the graph.

### References
1. [RDF vs. Property Graphs: Choosing the Right Approach for Implementing a Knowledge Graph](https://neo4j.com/blog/knowledge-graph/rdf-vs-property-graphs-knowledge-graphs/) 
2. [About: RDF Schema](https://dbpedia.org/page/RDF_Schema)
3. [The components of a URL](https://www.ibm.com/docs/en/cics-ts/6.x?topic=concepts-components-url)
4. [OWL Web Ontology Language Reference](https://www.w3.org/TR/owl-ref/)
5. [Description Logics](https://www.cs.ox.ac.uk/people/ian.horrocks/Publications/download/2014/KrSH14.pdf)
6. [Description Logics:ALC](https://www2.cs.sfu.ca/CourseCentral/411/jim/DL.ALC.pdf)
7. [A data engineer's guide to semantic modelling](https://zenodo.org/records/3898519)
