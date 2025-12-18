---
layout: lit_review
title: "Extracting Family Trees from Literary Texts"
giscus_comments: true
date: 2025-12-12
bib_id: chin2015extracting
---

### Why & How I Found This
For my final project in MPCS 57200 Generative AI, I built a knowledge graph-based chatbot that automatically creates hierarchical family trees from the information from chat. Even after the quarter ended, I remained curious about effective ways to generate family trees from text. I found this paper by searching "family tree nlp" in google; it appeared at the top. Two things caught my attention: first, it was also a final project, and second, it was written in 2015. I wanted to see how their approach compares to modern techniques and whether any aspects remain relevant today.

### Interesting Idea

#### 1. Incorporating Sentiment into Weight (2. Related work)
While an unhierarchical family tree is commonly represented as an undirected graph, [the work](https://aclanthology.org/W12-4102.pdf) done by Ahmed Hassan, Amjad Abu-Jbara, and Dragomir Radev defines a conversational network through an undirected graph where vertices are characters and edges are conversations between the two characters. Specifically, while the weight on the edge increases along with the amount of conversation, when positive interactions between two characters are detected, the researchers assign positive weight to the edges. I wonder how this method could differentiate between a change in relationship (love to hate, which would end up with a weight around 0) and an initially indifferent conversation (around 0 throughout the text).
