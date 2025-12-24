---
layout: course-lecture
title: "3. How to design the schema of a Knowledge Graph?"
course: CS520         
type: lecture
date: 2025-12-23
giscus_comments: true
toc:
  sidebar: left
---

[Lecture Slide](https://web.stanford.edu/class/cs520/)
[Lecture Note](https://web.stanford.edu/class/cs520/2020/notes/How_To_Create_A_Knowledge_Graph.html)
[Lecture Video](https://www.youtube.com/watch?v=-dZzHgM2950)

Note: This is my personal interpretation based on self-study of the lecture slides, notes, videos, and supplementary external resources. As a self-learner without formal enrollment or instructor feedback, my understanding, commentary, and connections between sources may be inaccurate or incomplete. 
Please refer to the official course materials for authoritative content.

#### Design Principle of an RDF Graph: Linked Data Principles
Linked data is a hyperlink that link from one dataset to the other (similarly, what traditional hyperlink connects one webpage to the other webpage).

Linked data principle consists of four principles:
  - use URIs as a name of things
  - use HTTP URIs so that people can look up those names
  - whenever someone looks up a URI, provide useful information using standards for RDF and SPARQL
  - include links to other things so that people can discover new things

#### Using URI as a Name of Things
URI can be a name of the items of interest (people, places, product, gene, etc). This hold for information resources, such as `https://www.Wikipedia.Org`, and non information resources such as `Person: http://biglynx.co.uk/people/dave-smith`.  While it is read by program, it is used by human. So, the shared rule for naming is that it should be short and pneumonic, just as how programmers will typically name variables. Also, we should ensure persistence so tha tother people can use later use it. 

#### Using HTTP URIs
Consider simple Digital Object Identifier (DOI, a way to refer to documents online).

not preferred:`doi:10.1038/nphys1170`. 

preferred:`https://doi.org/10.1038/nphys1170`

By explicitly mentioning the access method (https), the way of access is clear. So, when a computer or people encounters HTTP URI, it knows where to go. 

Also, this 'where to go' is referred as 'lookup' or 'deferenence.' When we lookup an information object, we will get a representation of its current state and when we look up a non-information object, we will get a set of RDF facts about it. 

#### Providing Useful Information Using Standards for RDF and SPARQL

#### Including Links to Other Things
There are three kinds of links:
  - relationship link
  - identity link
  - vocabulary link

##### Relationship Link
Relationship link is a link between two objects which are in two different datasets. 

{% include figure.liquid path="/assets/img/posts/CS520/lec3/relationship_link.jpeg" width="600px" caption="Source: Lecture Slide"%}

Consider the figure above. Subject (big:dave-smith) and Object (dbpedia:Birmingham) are in a different dataset but we are relating them using predicate `foaf:based_near`.

##### Identity Link
Identity link is a link which equates objects in one dataset to the objects in another dataset. $\rightarrow$ identity here is the synonym of same.

{% include figure.liquid path="/assets/img/posts/CS520/lec3/identity_link.jpeg" width="600px" caption="Source: Lecture Slide"%}

The example above is saying object `ds:me` is same as object `big:dave-smith`. This shows that one object can have multiple URI and we can equate them using associations. 

##### Vocabulary Link
Vocabulary link is a link from the data to the definition of terms. 

{% include figure.liquid path="/assets/img/posts/CS520/lec3/vocab_link.jpeg" width="600px" caption="Source: Lecture Slide"%}

In the example, we are asserting that `big:SmallmediumEnterprise` is a subclass of `dbpedia:Company`. We say this is linking to the definition of terms because we treat subclass as a definition of an object. 

#### Design of Property Graph
When designing property graph, we consider four factors:
  - choosing nodes, labels, and properties
  - when to introduce relationships
  - when to introduce relationship properties
  - how to handle non-binary relationships

#### Choosing nodes, labels, and properties
#### Introducing relationships
#### Introducing relationship properties

#### Handling Non-Binary Relationships
Consider a statement `X is between Y and Z`. This statement does not include binary relationship; it is a tenary (3-ary) relation.  When we deal with this type of relationship that has arity (number of arguments in relation) higher than 2, we use reification to break the n-ary relationship into a set of binary relationships. 

To do so, we follow these steps:
  1. create an object representing the relationship (pick one object)
  2. create objects for each argument of the relationship (identify all other objects)
  3. introduce relationships to connect the objects


{% include figure.liquid path="/assets/img/posts/CS520/lec3/nary.jpeg" width="600px" caption="Source: Lecture Slide. edited using Procreate"%}

The figure above shows how property graph deals with non-binary relationship. First, we create an object `Between`. Next we create object `X`, `Y`, and `Z`. Next, we introduce relationship `has_object', `has_between` and `has_between` that connect `Between` with `X`, `Y`, and `Z` respectively.




#### Things to Add
1. information from the note
2. quiz
3. more detail regarding providing useful information
4. check the other example of vocabulary link. see if i can qualify the explanation to the subset only.
5. more explanation for designing property graph
#### References
1. [Lecture Slide](https://web.stanford.edu/class/cs520/)
2. [Lecture Note](https://web.stanford.edu/class/cs520/2020/notes/How_To_Create_A_Knowledge_Graph.html)
3. [Lecture Video](https://www.youtube.com/watch?v=-dZzHgM2950)
