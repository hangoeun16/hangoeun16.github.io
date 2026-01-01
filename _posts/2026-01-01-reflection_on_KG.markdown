---
layout: post
title: Reflection on GenAI Final Project KGraph Chatbot
date: 2026-01-01
tags: [general]
description: >
    what I have succeeded, what I will improve, what I have learned
author: Summer Han
toc:
  sidebar: left
giscus_comments: true
---

### What is KGraph Chatbot?
A chatbot that maintains family relationships and personal information through a knowledge graph structure.

### Why KGraph Chatbot?
I was motivated to make this program because one of my hobbies is storytelling ping-pong with ChatGPT, and one of its noticeable drawbacks is that GPT tends to forget the family relationships that are built through the chat.
Initially, to resolve this issue, I thought about creating a chatbot that shows a family tree along with the chat UI, so that user can check if chatbot is accurately reflecting the family relationship.
Since I thought a graph was the best way to represent a family tree and later transform it into a hierarchical structure, I started by using NetworkX.
Then, while doing research about the combination of LLMs and graphs, I discovered the concept of knowledge graphs and realised that the graph I saved to draw the hierarchical family tree could also be used as external storage.
This broadened the use of the graph and eventually led to this project.

### What does KGraph Chatbot do?
- Chat with GPT-4o in a friendly conversational style
- Stores family relationships in a knowledge graph (NetworkX)
- Extracts people, family relationships, and personal attributes from messages
- Detects conflicts with previously stored information
- Visualises an unhierarchical family tree as an interactive graph
- Moderates using OpenAI's Moderation API
 
### What Features does KGraph Chatbot have?
- Family extraction: Automatically extracts family relationships such as spouse, parent, child, etc.
- Attribute extraction: Automatically extracts attributes such as age, occupation, personality, etc. 
- Placeholder naming: Use placeholder when name is ungiven and later
replace it the actual name when user provides. 
- Conflict detection: Flags when the user provides information that conflicts with information that user earlier provided. 
- Graph visualisation: Click the tree button to see family connections
- Content safety: Filters inappropriate content before processing

### Structure
```
Kgraph_chatbot/
├── app.py: Flask web app hosting the web page
├── chatbot.py: chatbot class 
├── knowledge_graph.py: stores information from the chat in a graph 
├── content_moderator.py: content safety checking
├── README.md: description of the program
└── templates/
    └── index.html: UI of the chatbot
```

### Remaining Issues
-  random shutdown issue: When a session has been open for more than 7 to 8 minutes, the programme slightly breaks (it appears as though pixels are broken at the edge of the chat UI) and performance decreases. While this could be a problem with my laptop or some other aspect of the code construction, I plan to investigate further.
-  place holder and conflict detection issue: While it works most of the time, the placeholder sometimes fails when used alongside conflict detection. Since this occurs randomly, I would like to investigate further to pinpoint the specific condition where the error occurs. 

### Future Plan
- identifying efficient prompt size: While I didn't want to hardcode all possible family relationships and attributes, I also wanted to avoid long prompts due to computational cost and speed concerns. My initial approach to response generation was to use NER to identify relevant nodes whenever a user asked a question, then examine the edges. By gathering relevant nodes and edges to create context, the chatbot would generate a response. However, this approach didn't work well—both accuracy and computational efficiency were poor. Balancing prompt length while effectively utilising the graph's structure will be my next goal. 

- Visualising nodes and edges used for chat responses: This idea stemmed from the arXiv paper "Agentigraph: An interactive knowledge graph platform for LLM-based chatbots utilising private data." While using a graph helps generate responses, creating an interactive visualisation provides users with more information and credibility. Based on this idea, I thought that displaying the edges and nodes used to generate each chat response alongside the response itself could add credibility to the answer and make users more engaged.

- creating a hierarchical family tree: While all my previous attempts have failed, I still want to resolve this issue. My current plan is to train a model by providing examples of hierarchical family trees and their corresponding family relations, then apply that separate programme to this project. 
