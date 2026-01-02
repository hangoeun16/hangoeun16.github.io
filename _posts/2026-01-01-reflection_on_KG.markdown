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
 
### Demo
#### Main Interface
{% include figure.liquid path="/assets/img/posts/reflection/main_page.jpeg" %}
*The chatbot interface showing the chat area, graph visualisation button (tree icon), and cache clear button (bin icon).*

#### Example Conversation 
{% include figure.liquid path="/assets/img/posts/reflection/conv1.png" %}
*The chatbot responds like a regular conversational assistant when the user provides input unrelated to family relationships.*

#### Knowledge Graph Visualisation
{% include figure.liquid path="/assets/img/posts/reflection/demo_visualisation.jpeg" %}
*When the user states that Kim and Jim are married, the system creates a graph where Kim and Jim are represented as nodes connected by an edge labelled 'spouse'.*

#### Placeholder Naming
{% include figure.liquid path="/assets/img/posts/reflection/demo_placeholder.jpeg" %}
*When the user doesn't provide enough information (e.g., "my sister likes chocolate"), the programme creates a placeholder node that can be replaced later when the actual name is provided.*

#### Conflict Detection in Action
{% include figure.liquid path="/assets/img/posts/reflection/demo_conflict_detection.jpeg" %}
*Initially, the user stated Kim has three children. When the user later says Kim has two children, the programme detects the conflicting information and flags it for clarification.*


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
├── app.py - Flask web app hosting the web page
├── chatbot.py - chatbot class 
├── knowledge_graph.py - stores information from the chat in a graph 
├── content_moderator.py - content safety checking
├── README.md - description of the programme
└── templates/
    └── index.html - UI of the chatbot
```

### Attempted Approaches Not in the Final Version

1. Heavy prompt engineering for extraction and validation:  I used multiple layers of prompt engineering to: detect if user input should be flagged; check if the input involves family relationships that can be parsed into (person1, relationship, person2) triple format and return the triples if possible; check if the input includes relationships between entities but not family relationships, and if so, parse into (entity1, relationship, entity2) triple format; and if the input contains no relational information, extract attributes. Using all these prompts made the programme so heavy that even getting a response for "hi" took more than one minute. This taught me the importance of balancing thoroughness with efficiency.

2. Semantic search with knowledge graph
When generating chat responses, I used semantic search alongside ChromaDB. While it generated accurate responses, there was an unresolved ChromaDB cache issue even with code that manually created collections. Additionally, storing information twice (in both the graph and ChromaDB) proved inefficient.

3. Alternative UI layouts
I experimented with several UI configurations:
   - Multiple pages: First page for the chatbot, second page for the family tree. This proved inconvenient for users, as the users had to move back and forth in the pages. 
   - Split view: Chat on the left, graph on the right. This juxtaposition was inefficient unless the graph automatically updated with each user input, which would be computationally expensive.
   
   I realised that if I wanted an updated graph presented to the user, it would be better to let them choose when to view it. This led to the final design: a button to display the graph on demand rather than showing it by default.

4. Creating a hierarchical family tree
I attempted several approaches to create a hierarchical family tree:
   
   - Open-source Python visualisation packages: Most packages couldn't graph top-down hierarchical family trees. One package that supported vertical hierarchical trees required a specific txt file format as input. Reformatting all the graph information to match this format was difficult enough, but dealing with placeholders added another layer of complexity—whilst my programme only creates placeholders when mentioned by the user, this package required complete generational information (for instance, all people who have a parent must have both a father and mother).
   
   - Generation attribute approach: I tried assigning a "generation" attribute where the first person added to the graph would have generation 0, and all following nodes would have their generation calculated based on their relationship to the first person. However, several issues arose: the first person might not actually have family whilst the rest do; it placed aunts/uncles and parents in the same generation, requiring additional processing; there could be multiple distinct families in the chat; and distinct families could later merge. Manually hardcoding these edge cases proved too difficult.
   
   - LLM-generated hierarchical formatting: I attempted to have the chatbot generate a hierarchical family tree by reformatting its response when users asked "can you give me a family tree of [person's name]?" However, proper reformatting required extensive background information, which would need complex prompting.
   
   Given these challenges, I opted for a non-hierarchical family tree for this project—essentially a relationship graph rather than a traditional hierarchical tree. This remains a key area for future development.

### Remaining Issues
-  random shutdown issue: When a session has been open for more than 7 to 8 minutes, the programme slightly breaks (it appears as though pixels are broken at the edge of the chat UI) and performance decreases. While this could be a problem with my laptop or some other aspect of the code construction, I plan to investigate further.
-  place holder and conflict detection issue: While it works most of the time, the placeholder sometimes fails when used alongside conflict detection. Since this occurs randomly, I would like to investigate further to pinpoint the specific condition where the error occurs. 

### Future Plan
- identifying efficient prompt size: While I didn't want to hardcode all possible family relationships and attributes, I also wanted to avoid long prompts due to computational cost and speed concerns. My initial approach to response generation was to use NER to identify relevant nodes whenever a user asked a question, then examine the edges. By gathering relevant nodes and edges to create context, the chatbot would generate a response. However, this approach didn't work well—both accuracy and computational efficiency were poor. Balancing prompt length while effectively utilising the graph's structure will be my next goal. 

- Visualising nodes and edges used for chat responses: This idea stemmed from the arXiv paper "Agentigraph: An interactive knowledge graph platform for LLM-based chatbots utilising private data." While using a graph helps generate responses, creating an interactive visualisation provides users with more information and credibility. Based on this idea, I thought that displaying the edges and nodes used to generate each chat response alongside the response itself could add credibility to the answer and make users more engaged.

- creating a hierarchical family tree: While all my previous attempts have failed, I still want to resolve this issue. My current plan is to train a model by providing examples of hierarchical family trees and their corresponding family relations, then apply that separate programme to this project.

