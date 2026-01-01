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

