---
layout: lit_review
title: "Extracting Family Trees from Literary Texts"
giscus_comments: true
date: 2025-12-12
bib_id: chin2015extracting
---

### Why & How I Found This
For my final project in MPCS 57200 Generative AI, I built a knowledge graph-based chatbot that automatically creates family trees from the information from chat. Even after the quarter ended, I remained curious about effective ways to generate family trees from text. I found this paper by searching "family tree nlp" in google; it appeared at the top. Two things caught my attention: first, it was also a final project, and second, it was written in 2015. I wanted to see how their approach compares to modern techniques and whether any aspects remain relevant today.

### Interesting Idea

#### 1. Incorporating Sentiment into Weight (2. Related work)
While an unhierarchical family tree is commonly represented as an undirected graph, [the work](https://aclanthology.org/W12-4102.pdf) done by Ahmed Hassan, Amjad Abu-Jbara, and Dragomir Radev defines a conversational network through an undirected graph where vertices are characters and edges are conversations between the two characters. Specifically, while the weight on the edge increases along with the amount of conversation, when positive interactions between two characters are detected, the researchers assign positive weight to the edges. I wonder how this method could differentiate between a change in relationship (love to hate, which would end up with a weight around 0) and an initially indifferent conversation (around 0 throughout the text).


#### 2. Using CoreNLP for NER (3.1. Identifying characters)
The researchers used Stanford CoreNLP for identifying characters and then matched the names by the set pattern. The patterns that it accepts are:

1. {honorific} {first} {middle} {last}
2. {honorific} {first} {last}
3. {honorific} {last}
4. {first} {middle} {last}
5. {first} {last}
6. {first $\mid$ last} (ambiguous)

I understand that these patterns derive from the fact that the researchers were dealing with literary texts mostly from classics, such as $\textit{Wuthering Heights}$ and $\textit{Romeo and Juliet}$. Since this pattern seems to work best with that type of literature, it may not be easily applicable to other types of literature. Apparently, this was written more than 10 years ago, but I wonder whether using prompt engineering in this case would have worked better.

#### 3. Symmetry in Relationship (3.2.1. Extensions)
One of the potential enhancements introduced in this paper is identifying symmetric relationships. A symmetric relationship is a relationship R such that for arbitrary $a,b \in V, aRb \Rightarrow  bRa$. Actual examples are siblings and cousins. For instance, if A is a sibling of B, then B is also a sibling of A. While doing my project, I also thought identifying symmetric relationships could be helpful. Since my project's family tree was a directed graph $G = (V,E)$ where V represents each person and E represents a relationship between two people, identifying a symmetric relationship between two vertices would allow for one directional edge instead of two because $(v_1​,v_2​)$ and $(v_2,v_1)$ would be the same. However, I did not end up implementing a step to detect symmetric relationships because I had Korean family relationships in mind, and most Western symmetric relationships are not symmetric in Korea. For instance, when referring to a cousin, Koreans usually include words that identify gender and age. So, while it could be helpful in a Western family context, it might not be compatible with Korean family relationships. However, I think that using symmetric relationships and then adding attribute comparisons in each node, which might include age and gender, could be an efficient approach.

### Concepts to Revisit: Computational Ccomplexity
The paper claims that strong compatibility is  an equivalence relation, and it takes $O(nk)$ strong compatibility checks where $n$ is the number of chains and $k$ is the number of equivalence classes. 

### Future Plan
1. Read [Extracting Signed Social Networks From Text](https://aclanthology.org/W12-4102.pdf)
2. Read [Stanford CoreNLP package](https://stanfordnlp.github.io/CoreNLP/), focusing on ner and deterministic coreference resolver, and see how it deals with place holder

