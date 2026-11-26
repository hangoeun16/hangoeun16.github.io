---
title: "Henry? Henzy?"
deck: "One Name, Two Scripts, and a Persistent LLM Error"
description: "One model misspelled a character's Korean name once, and the wrong spelling never went away. His English name stayed perfect."
date: 2026-11-25
---

I have spent more than 1,000 hours in AI character roleplay over the past year, three or more hours a day, in mixed Korean and English. Last week I saw a failure I had never seen before. The model misspelled a character's Korean name once, and the wrong spelling never went away. It spread until it outnumbered the correct one, and it came back after I corrected it. Meanwhile the same character's English name stayed perfect. The model appeared to retain the character's identity despite the naming error.

Throughout this post, "Henzy" stands for the Korean misspelling 헨지 (hen-ji). The model never actually misspelled Henry in English.

This is an exploratory case study of one conversation. I exported it and measured what happened. I could not pin down the cause, but I could measure what the error did after it appeared.

## What happened

At message 267 (turn 134) of a long story roleplay, after 588 correct spellings, ChatGPT (gpt-6-thinking) wrote a character's name as 헨지 (hen-ji) instead of 헨리 (hen-ri, "Henry").

The model had invented the character itself, a side character written as "Henry" in English dialogue and 헨리 in Korean narration. Before the slip, he appeared in 122 of the model's 133 replies. I typed 헨리 14 times in the chat and never typed 헨지, so the misspelling came from the model.

<div class="tbl" markdown="1">
<p class="fig-label">Table 01</p>
<p class="fig-title">The conversation at a glance</p>

| Measure | Value |
|---|---|
| Messages on the active branch | 818 (410 mine, 408 the model's) |
| Total text | about 2.03 million characters |
| First misspelling | message 267 (turn 134), after about 620,000 characters |
| Misspellings in total | 282, across 103 replies |

</div>

<dl class="defs">
  <p class="defs-title">Method</p>
  <dt>Branch</dt>
  <dd>I exported this one conversation as JSON. The export holds 1,345 nodes, including edited and regenerated messages, so I rebuilt the branch I actually saw by following parent links from the last message back to the root.</dd>
  <dt>Messages</dt>
  <dd>I kept the text of my messages and the model's final replies, and dropped system, tool and metadata nodes. Character counts include the Markdown the model wrote (headings, bold, emoji) but no interface markup.</dd>
  <dt>Detection</dt>
  <dd>Korean forms are exact matches for 헨리 and 헨지; a search for other 헨/핸 + syllable forms found no other variant of the name. English forms are case-insensitive matches for "Henry" plus any word one edit away from it, of which there were none.</dd>
  <dt>Error rate</dt>
  <dd>Misspelled ÷ (correct + misspelled), counting name occurrences in the model's replies. Replies that never mention the name are left out of the denominator.</dd>
  <dt>Bins and turns</dt>
  <dd>A 50-message bin is 50 consecutive messages on the active branch, mine and the model's. A turn is one message from me plus the model's reply.</dd>
</dl>

## What the error did next

The misspelling never left the chat. In the 700–749 range it outnumbered the correct spelling, 57 to 28.

<figure class="fig-chart">
  <p class="fig-label">Figure 01</p>
  <p class="fig-title">The wrong spelling rose from 0% to 69% of mentions</p>
  <p class="fig-sub">Share of Korean mentions spelled 헨지 instead of 헨리, per 50 messages (282 misspellings)</p>
  {% include line-chart.html c=site.data.charts.henry_henzy.fig1 label="Line chart: the share of Korean mentions spelled 헨지 stays at 0% until message 250, rises unevenly, peaks at 69% in the 750 bin, and falls to 32% in the last bin, which includes a correction at message 804." %}
  <figcaption>Source: my exported ChatGPT log · 818 messages, Nov 21–25, 2026</figcaption>
</figure>

## The English name never broke

<div class="stats">
  <div class="stat">
    <span class="stat-num">13.6%</span>
    <span class="stat-label">Korean spelling errors</span>
    <span class="stat-sub">헨리 → 헨지</span>
  </div>
  <div class="stat">
    <span class="stat-num">0%</span>
    <span class="stat-label">English spelling errors</span>
    <span class="stat-sub">759 occurrences of Henry</span>
  </div>
</div>

The model never misspelled "Henry" in English. Across its 408 replies it wrote the English name 759 times with zero spelling errors, not even a one-letter near miss. Overall, 13.6% of Korean mentions were misspelled against 0% of English ones.

<figure class="fig-chart">
  <p class="fig-label">Figure 02</p>
  <p class="fig-title">The Korean spelling drifted while the English one never did</p>
  <p class="fig-sub">Share of the name misspelled in the model's replies, by conversation turn</p>
  {% include line-chart.html c=site.data.charts.henry_henzy.fig2 label="Line chart: Korean misspellings rise from 0% in turns 1–133 to 39.3% in turns 301–409, while English misspellings stay at 0 of 759 throughout." %}
  <figcaption>Source: my exported ChatGPT log · 408 model replies, grouped by turn</figcaption>
</figure>

The two often sat side by side. 90 replies contain both "Henry" and 헨지, sometimes a few lines apart. The model kept writing his English name correctly while the Korean transliteration of the same name drifted.

One caution: "Henry" is a very common English word, while 헨리 is a rarer transliteration. The gap may come from how common each form is rather than from the script itself. Testing other names would separate the two.

## It drifted inside single replies

In 100 replies both Korean spellings appear together. In 93 of them the reply opens with the correct name and slips partway through, switching about twice per reply and up to 10 times. In one passage, the Korean narration uses 헨리, the next line uses 헨지, and a line of English dialogue says "Henry", all within five lines.

## Misspellings clustered before one particle

235 of the 282 misspellings (83%) appear as 헨지가, the name followed by the subject particle 가, as in "Henry did something."

<div class="tbl" markdown="1">
<p class="fig-label">Table 02</p>
<p class="fig-title">Misspellings by particle</p>

| Followed by | Correct | Misspelled | Error rate |
|---|--:|--:|--:|
| 가 (subject) | 778 | 235 | 23% |
| 도 ("also") | 33 | 8 | 20% |
| 는 (topic) | 160 | 28 | 15% |
| 의 (possessive) | 56 | 7 | 11% |
| 네 ("Henry's family") | 68 | 0 | 0% |
| 와 ("and") | 28 | 0 | 0% |

<p class="tbl-cap">Counts cover replies from the first misspelling onward.</p>
</div>

This is an observation, not a mechanism. 헨지가 may have hardened into a reusable sentence opener, or the subject position may simply be where the name appears most. Checking how these forms are tokenized would help separate the two.

## Corrections helped, but the effect faded

After the first slip I wrote the correct name myself 8 times. Seven of those times, the error rate in the model's next reply dropped, five times to zero. It then climbed back within a few turns. In one case (message 422) the next reply got worse instead. The clearest case is message 804, where I asked a question about Henry by name.

<div class="tbl" markdown="1">
<p class="fig-label">Table 03</p>
<p class="fig-title">Around message 804</p>

| Window around message 804 | Correct | Misspelled | Error rate |
|---|--:|--:|--:|
| 5 replies before | 10 | 21 | 68% |
| The next reply | 40 | 6 | 13% |
| 5 replies after that | 34 | 14 | 29% |
| The final reply | 2 | 10 | 83% |

</div>

These were implicit corrections: I used the right name, but never said the model had it wrong.

## Five possible explanations

I checked the obvious explanations against this log and against my own year of roleplay. None seems sufficient on its own, though with one incident none can be fully ruled out as a contributing factor.

<div class="tbl" markdown="1">
<p class="fig-label">Table 04</p>
<p class="fig-title">Explanations checked</p>

| Explanation | Why it doesn't explain this alone |
|---|---|
| I introduced the typo | I never typed 헨지 in the chat |
| A side character is mentioned too rarely to stay anchored | He appeared in 122 of 133 replies before the slip, 588 times |
| The conversation was too long | I have run longer chats, some until they hit the length limit, with no such error |
| Mixing Korean and English unsettles the spelling | Every roleplay I run mixes the two |
| The model (gpt-6-thinking) | Another long chat on the same model, where Henry is the main character, has no misspellings |

</div>

One possibility is a rare sampling error that subsequently propagated through the conversation.

## Why it matters: measuring recovery

In this conversation, the error was slow to emerge but difficult to eliminate. Measuring only how often such errors start would miss that.

- **Short-horizon evaluations may miss the onset.** One heavy user saw this once in more than 1,000 hours. A test suite of short conversations is unlikely to trigger it.
- **Even rare failures could matter at product scale.** Something one user sees once a year may reach some users every day when millions of people chat for hours.
- **Implicit user corrections did not produce lasting recovery.** They helped for a reply or two, then the error returned. For the person it happens to, a one-off glitch can become a lasting feature of their story.

## Limits, and what I'm testing next

This is one incident in one conversation, so nothing here says how models behave in general. Self-reinforcing errors are a known pattern. [LLMs Get Lost in Multi-Turn Conversation](https://arxiv.org/abs/2505.06120) (Laban et al., ICLR 2026) found that models that take a wrong turn in a conversation tend not to recover. [Do LLMs Benefit From Their Own Words?](https://arxiv.org/abs/2602.24287) (Huang et al., 2026) calls errors that spread through a model's own earlier replies context pollution. What this log adds is how that looks in a real long Korean roleplay: one proper noun, broken in one script but not the other, with user corrections that fade within a few turns.

This case suggests that reliability is not just about how often a model makes mistakes. It is also about what happens after a mistake enters the conversation. A model can retain a character's apparent identity, preserve their English name, and still repeatedly corrupt the Korean representation of that same name. For long-horizon conversational AI, error recovery deserves to be evaluated alongside error prevention.

I'm now testing whether this behavior can be reproduced from the original conversation history, and whether Korean and English name cues differ in their ability to restore consistency. Results will follow in Part II.

<section class="refs">
  <p class="defs-title">Sources</p>
  <ol>
    <li>
      <span class="ref-num">01</span>
      <span><a class="ref-title" href="https://arxiv.org/abs/2505.06120">LLMs Get Lost in Multi-Turn Conversation</a>
      <span class="ref-src">Laban, Hayashi, Zhou, Neville · ICLR 2026</span></span>
    </li>
    <li>
      <span class="ref-num">02</span>
      <span><a class="ref-title" href="https://arxiv.org/abs/2602.24287">Do LLMs Benefit From Their Own Words?</a>
      <span class="ref-src">Huang, Choshen, Astudillo, Broderick, Andreas · arXiv, 2026</span></span>
    </li>
  </ol>
</section>
