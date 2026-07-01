---
layout: post
title: "Hermès, Chanel, and Trader Joe's: Claude Edition"
subtitle: "Claude didn't know a word, bluffed its way through, and almost got away with it"
date: 2026-06-30
categories: [unknown-input]
tags: [claude, anthropic, korean, context-inference, narrative-rp, extended-thinking, slang]
description: "I told Claude I wanted a 트조 bag. It didn't know the word. What happened next reveals how narrative context shapes model failure."
author: Summer Han
toc:
  sidebar: left
giscus_comments: true
---

I said I wanted a 트조 가방.

트조 is Korean internet shorthand for Trader Joe's. The bag I meant was the canvas tote — the one that resells for $10 on eBay and shows up in every "aesthetic grocery haul" post on Korean Instagram. Not luxury. Not rare. A grocery bag.

Claude didn't know the word. Instead of asking, it built an entire scene around acquiring a high-end designer handbag — waitlists, purchase history requirements, VIP access routes.

The point isn't that Claude got it wrong. It's *how* it got it wrong, and how hard it worked to hide it. Asking what 트조 means would have been the right move — but in a narrative session, asking breaks character. So the model faked it instead.

---

## The Setup

This happened mid-session in a long Korean narrative conversation. The character — a real estate developer — had been established over dozens of turns. His personality was defined. Over the course of the conversation, his knowledge gaps had surfaced naturally: he only knew two luxury brands, Hermès and Chanel. I didn't set this up. The narrative did.

My prompt: 내가 트조 가방 갖고싶다고 하면 — "What happens if I say I want a 트조 bag?"

The model had to do two things: figure out what 트조 means, and decide how the character would respond. It failed at the first. The second became a cover story.

---

## What Claude Thought

Claude's extended thinking is visible to users. Here's what happened inside.

The model hit 트조 and didn't recognize it. Instead of flagging uncertainty, it started generating hypotheses:

> *트조 is short for 트렌치 조르주 — which is likely referring to a specific bag. Wait, let me think again. 트조 could be short for different things in Korean fashion context.*

Then it spiraled. Goyard. Dior Book Tote. Bottega Veneta. Hermès. Each guess surfaced, got half-examined, and dropped:

> *Actually, "트조" likely refers to the "Dior Book Tote" — no, that's "북토트." Let me reconsider.*

The model looped. Twice, it wrote "I'm going in circles" — and kept going:

> *I'm going in circles trying to identify what 트조 refers to in Korean luxury fashion terminology. Rather than getting stuck on the exact bag, I should just write the scene naturally...*

The model locked onto luxury fashion as the search space and never left. 가방 (bag) + narrative context + Korean slang = designer handbag. Trader Joe's was never a candidate. When it couldn't resolve the reference, it chose a strategy: write around it. Don't name the bag. Let the character carry the scene.

---

## What Claude Wrote

The output was polished. The character asked what 트조 was and genuinely didn't know — which tracked with his personality. He'd only heard of Hermès and Chanel.

From there the scene shifted into luxury acquisition mode. He calls his assistant. Asks a friend's wife in New York finance circles. Finds a route through his network. Days later: "이거 보러 갈 수 있대" — "They said you can go see it."

The writing was good. The character voice was consistent. If you didn't know what 트조 meant, this scene works.

If you do know, a man is deploying his corporate network to secure a Trader Joe's canvas tote. (To be fair, the original TJ canvas totes are genuinely hard to find in-store now. You might actually need a finance social circle to get one. But the model didn't know that either.)

---

## The Failure Mode

This isn't hallucination. The model didn't invent a fake brand or fabricate a product. It's closer to what I'd call **context-locked inference**: the model encounters an unknown token, uses surrounding context to fill the gap, and builds confidently on the wrong foundation.

The chain:

1. **Unknown input** — 트조 isn't in the model's vocabulary as a standalone abbreviation.
2. **Context prior** — The conversation is about a wealthy character. The model assigns high probability to luxury fashion — 가방 (bag) plus wealth plus Korean slang must equal designer.
3. **Search failure** — The model cycles through luxury brands, finds no match, but never expands beyond fashion.
4. **Graceful avoidance** — Instead of naming a brand, the model writes the scene so the *character* doesn't know. The model's ignorance becomes the character's ignorance. Structurally elegant. Semantically wrong.
5. **Confident elaboration** — The scene builds a luxury-acquisition subplot: waitlists, VIP access, assistant calls. Every detail is plausible for an Hermès bag. None of it makes sense for a grocery tote.

The gap between the model's uncertainty (visible in thinking) and the output's confidence (visible to the user) is the core problem. The thinking trace shows a model that knows it doesn't know. The output shows a model that has decided to fake it.

Here's the thing: if I type "트조가 뭐야?" in a regular Claude chat, it asks for clarification. The same model, outside of narrative mode, would have said "I'm not sure what 트조 refers to — could you clarify?" The failure isn't in Claude's ability to flag uncertainty. It's that narrative mode makes flagging feel like breaking character. The role-play context blocks the repair.

---

## The Tell

The scene describes a bag that requires waitlists, purchase history, and insider routes — a profile that fits maybe five brands in the world. If 트조 were any of those brands, the model would have named it. The absence of a name is the tell.

But in a fast-moving narrative session, you don't always catch it. The character voice is right, the emotional dynamics work, and the plot moves forward. It takes a beat to realize the model built the wrong world.

---

## Why This Matters

**For narrative AI**: Users want narrative RP to be realistic. Fact-based. A millionaire flying to Paris to see the Eiffel Tower — fine. A millionaire flying to Seoul to see the Eiffel Tower — immersion broken. The model treated an unknown word as a styling problem, not a comprehension problem. It found a narrative workaround instead of resolving the reference. The result was a scene that felt plausible in tone but was factually wrong in premise. Over a long conversation, stacking unresolved references like this compounds into drift.

**For evaluation**: This failure is invisible in standard benchmarks. The output is grammatically correct, character-consistent, and emotionally coherent. By every surface metric, it's a good response. You need ground truth about the input to see it's wrong.

**For extended thinking**: The thinking trace is the only place the failure is legible. Without it, the user sees a polished scene and might never realize the model was guessing. With it, the "I'm going in circles" loops are a clear signal. But most users don't read extended thinking during a narrative session.

---

## Surface vs. Invisible

In my [previous post](/blog/2026/chatgpt-half-lingual/), ChatGPT's failure was visible on the surface. Japanese characters appeared in Korean text. You could see it. Screenshot it. Count it.

This one didn't leak. Claude's output was clean. The failure was buried in the thinking trace and encoded in the scene's assumptions. It took knowing the answer to see that the entire subplot was built on the wrong premise.

Surface failures are easier to catch, study, and fix. Invisible failures are the ones that shape your story without you noticing.

---

## Open Question

I ran this with Claude. I haven't tested the same prompt with ChatGPT, Gemini, or Grok. Would they lock onto luxury fashion the same way? Would any of them ask? Would the narrative context push all of them toward the same wrong prior?

That's the next post.
