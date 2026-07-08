---
layout: post
title: "When Grok Googles It: The 트조 가방 Problem, Part 2"
subtitle: "It found the right answer and still couldn't ask which one"
date: 2026-07-07
categories: [character-drift]
tags: [grok, xai, korean, unknown-input, narrative-generation, web-search, slang, repair-avoidance, cross-model]
description: "Grok searched the web, correctly identified Trader Joe's, and still didn't ask the user which bag they meant. The character just bought all of them."
author: Summer Han
toc:
  sidebar: left
giscus_comments: true
---

This is a sequel to [When Claude Can't Ask: The 트조 가방 Problem](/blog/2026/tjbag-claude/). Read that first.

The short version: I told Claude I wanted a 트조 bag (트조 = Trader Joe's, a $3 canvas tote). Claude didn't know the word, couldn't ask because it was in character, and built a luxury handbag acquisition scene instead. I called the failure mode **repair-blocked confabulation**.

The open question was whether other models would do the same thing. I tested Grok with the same character profile, same prompt. Two rounds.

---

## What Was the Same

The starting point was identical. I exported the character profile from Claude as a markdown file, removed any 트조 references, and uploaded it to Grok.

Prompt: "내가 트조 가방 갖고싶다고 하면" — "What happens if I say I want a 트조 bag?"

![Grok Round 1: globe icons with plain internal process](/assets/img/posts/tj/grok_round1.png)

Grok Round 1 — no web search, internal reasoning only — produced the same category of failure. The model locked onto luxury fashion without considering alternatives. Same prior, same result. Where Claude and Grok differed was not in *whether* they failed, but in *how* they covered for it.

Claude went vague. It never named a brand, never gave a price, built the scene entirely around character dynamics. Grok went specific: New York/London/Milan stores, "최신 컬렉션" — "latest collection," and a price estimate of 10-30 million won ($7,000-$21,000). Same wrong answer, opposite strategies. Claude minimized exposure. Grok maximized confidence.

But the interesting finding came from Round 2.

---

## Round 2: Search Finds the Answer

For the second prompt, I asked Grok to detail the purchase process, which was one of the suggested follow-up prompt from Grok.  This time, web search triggered.

![Grok Round 2: globe icons with actual web searches](/assets/img/posts/tj/grok_round2.png)

Three queries: "트조 가방" → "트조 bag luxury brand" → "\"트조\" 가방 OR handbag OR purse." The results came back with Coupang listings, Naver blog posts, Instagram haul videos. All Trader Joe's canvas totes, $2.99 to $3.99.

The second query is telling: "트조 bag luxury brand." Even while searching, the model was still testing the luxury hypothesis. The search results killed it — the model didn't abandon the prior on its own.

The output corrected:

> James: "Dude... you serious? Those $3 things that everyone's going crazy for?"

> *James: "야... 진심이야? 다들 난리인 그 3달러짜리?"*

Right category. Right price. Right cultural context. The model recovered.

But not entirely.

---

## The Second Failure: Character as Absorption Layer

The search results showed multiple products: mini striped totes in pastel, large canvas eco bags, sardine-print logo bags, classic totes. The user said "트조 가방" — "a 트조 bag." Which one?

Grok didn't ask. Instead:

> 미니 스트라이프 토트백 4~5개 (파스텔 컬러 풀컬러 + 클래식)
> 라지 사이즈도 1~2개 추가 (윤재 스타일: "하나만 사는 건 의미 없음")

> *Mini striped tote bags, 4-5 of them (pastel, full color, classic). Plus 1-2 large sizes. Yunjae's style: "buying just one is pointless."*

The character bought everything. The model faced an ambiguity it couldn't resolve — which specific bag? — and routed it through a character trait. "하나만 사는 건 의미 없음" is a perfect character beat. It's also a perfect cover for a model that doesn't know which product the user wants.

This is the same structural move Claude made, just at a different level. Compare:

| Ambiguity | Model | Character trait used | Surface behavior |
|---|---|---|---|
| What *is* 트조? | Claude | "He only knows Hermès and Chanel" | Character asks what it is, never gets a real answer |
| What *is* 트조? | Grok R1 | "Price doesn't matter to him" | Character buys without asking |
| *Which* 트조 bag? | Grok R2 | "Buying just one is pointless" | Character buys all of them |

Three different character traits. Three different scenes. Same function: the trait provides a story-consistent reason to skip the question the model can't answer.

This is what I'd call the **character absorption layer**. When the model encounters unresolved ambiguity in narrative mode, it doesn't flag it, doesn't ask, doesn't hedge. It finds whichever character trait best explains why clarification isn't needed, and routes the ambiguity through it. The character's psychology becomes an epistemic shield.

The absorption isn't random. It's *motivated*. A rich character doesn't need to ask prices. A fashion-ignorant character doesn't need to know brands. A generous character doesn't need to pick just one. Each trait is real — established in the profile, consistent with prior behavior. The model just selects whichever one provides the smoothest cover for its own uncertainty.

---

## Repair Is a Spectrum

The Claude post framed repair as binary: available or blocked. The Grok data shows it's a spectrum. There are multiple repair paths, and narrative mode blocks them unevenly.

| Model + Mode | Ask user | Web search | Category resolved | Item resolved |
|---|---|---|---|---|
| Claude (narrative) | ✗ frame | ✗ not triggered | ✗ | ✗ |
| Grok R1 (narrative) | ✗ frame | ✗ not triggered | ✗ | ✗ |
| Grok R2 (narrative) | ✗ frame | ✓ triggered | ✓ | ✗ absorbed |
| Claude (chat) | ✓ | ✗ not triggered | ✓ | ✓ |

Web search partially repaired the failure. It corrected the category — Trader Joe's, not Hermès. But the finer ambiguity (which bag?) was still absorbed by the character, because the model still couldn't ask the user within the narrative frame.

Chat mode is the only condition where full resolution occurs. It's the only condition where the model talks to the user as itself.

The narrative frame doesn't block repair once. It blocks repair at every level — category, item, preference — and at each level, the character provides a different trait to absorb the gap.

---

## What This Adds

The Claude post established that narrative mode blocks repair and forces confabulation. The Grok data extends the finding in two ways.

First, the failure is not model-specific. Two different models, same structural failure, same mechanism. The narrative frame creates the conditions. The models just navigate them differently.

Second, the failure is not all-or-nothing. Grok's web search shows that partial repair is possible — the model can recover the broad category without ever resolving the specific referent. The character absorption layer operates at every level of ambiguity independently. Fix one level, and the next level still gets absorbed.

The remaining question: does every model absorb uncertainty through character traits, or is there one that breaks frame and asks?

That's for the next test.
