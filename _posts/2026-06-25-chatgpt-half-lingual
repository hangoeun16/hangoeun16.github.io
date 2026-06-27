---
layout: post
title: "2025 Sep–Oct: My ChatGPT Went 0.5-Lingual"
subtitle: "홈シ어터 and other things GPT-5 thinks are Korean"
date: 2026-06-26
categories: [language-corruption]
tags: [chatgpt, openai, gpt-5, korean, japanese, language-confusion, kanji]
description: "In fall 2025, my Korean ChatGPT conversations started leaking Japanese. Here are the patterns I found across 12 examples."
author: Summer Han
toc:
  sidebar: left
giscus_comments: true
---

In fall 2025, something changed.
 
I run long Korean conversations in ChatGPT. Character-driven, narrative sessions that often pass 200 turns. I'd done this since March without issue. Then, around late September, Japanese started showing up in my Korean output. Not full sentences. Not code-switching. Single words, partial characters, script fragments slipping into otherwise fluent Korean.
 
I didn't collect these systematically. I just screenshotted the ones that caught my eye, thinking I'd look into it later. 
I found 12 on my phone. They fall into three patterns.
---
 
## Pattern 1: Sino-Korean Word → Japanese Kanji (1:1 Mapping)
 
Korean and Japanese both borrowed thousands of words from Chinese. For this case, the same word exists in both languages with the same meaning and the same Chinese characters. Korean stopped writing these in Hanja decades ago and switched to Hangul. Japanese kept the kanji.
 
In this pattern, the model writes the Japanese kanji form of a word that has a direct, living Korean equivalent in Hangul.
 
**Example: 健在**
 
> 부모님 모두 **健在**
 
Korean writes this as 건재 (健在). Same word, same meaning, same origin. The only difference is script. The model picked the Japanese one.
 
<details>
<summary>4 more examples</summary>
**志向** — "금융**志向**이 있는 경우" instead of 지향.
 
**浪費** — "**浪費**로 보지 않아" instead of 낭비.
 
**壓縮** — "모든 순간을 **壓縮**해서" instead of 압축.
 
**繊細** — "권위를**繊細**하게 연출하는" instead of 섬세하게. Here the kanji is followed by the Korean suffix -하게, creating a hybrid that belongs to neither language.

**球** — "작은 투명 구(**球**)" this case somehow showing Japanese character inside the paranthesis. 
 
</details>
These are the simplest cases. The model has the right word, the right meaning, the right grammar. It just outputs the wrong script.
 
---
 
## Pattern 2: Japanese Kanji with No Living Korean Equivalent
 
This is different from Pattern 1. Here, the Japanese kanji word doesn't map to a Sino-Korean equivalent that modern Korean actually uses. Korean uses a different word instead.
 
**Example: 横顔**
 
 
> 잠깐 그 **横顔**을 봤어 —
 
横顔 (よこがお) means "side profile." Korean doesn't use a Hanja equivalent. It uses 옆모습, a native Korean word. The model reached past Korean entirely and pulled from Japanese.
 
The particle choice is telling. Korean has two object markers, 을 and 를, that work the same way but depend on whether the preceding word ends in a consonant or a vowel. 옆모습 ends in a consonant (ㅂ), so it takes 을. But 横顔 is pronounced 요코가오 in Korean, ending in a vowel, so it should take 를.
 
The model wrote 横顔 but chose the particle for 옆모습. It "knew" the Korean word and applied Korean grammar to it, then wrote the Japanese kanji anyway. The confusion isn't in meaning or grammar. It's only in script.
 
<details>
<summary>2 more examples</summary>
**癖** — "숨을 참는**癖**이 있어." 癖 (くせ, kuse) is 
standard Japanese. Korean doesn't use the Hanja form. It 
uses 버릇, a native Korean word. Again, the particle gives 
it away: 버릇 ends in a consonant, so it takes 이. 쿠세 
ends in a vowel, so it should take 가. The model wrote 癖 
but applied the particle for 버릇.
 

 
</details>
The same particle mismatch appears in both examples. The 
model internally processes the Korean word and applies 
Korean grammar to it. Only the surface output switches to 
Japanese. The confusion is in rendering, not understanding.

Pattern 1 is a script swap between equivalents. Pattern 2 is the model importing a Japanese word that Korean never uses in that form. The gap is wider.
 
---
 
## Pattern 3: Full Japanese Expression
 
Here the model doesn't substitute a single kanji. It drops a complete Japanese word, including Japanese-only grammatical elements, into a Korean sentence.
 
**Example: 鋭い**
 
> 아주 **鋭い** 포인트예요.
 
鋭い (するどい, surudoi) is a Japanese adjective meaning "sharp." The い is a Japanese conjugation suffix that doesn't exist in Korean. Korean uses 예리한. The model didn't just swap a kanji. It wrote a Japanese word with Japanese grammar inside a Korean sentence.
 
This could be grouped under Pattern 2, but the presence of hiragana (い) marks it as a deeper level of confusion. In Patterns 1 and 2, the model stays within shared Chinese characters. Here, it crosses into Japanese-only territory.
 
---
 
## Pattern 4: Partial Katakana in Loanwords
 
Both Korean and Japanese transliterate English borrowings into their own scripts: Korean uses Hangul, Japanese uses katakana. In this pattern, both systems activate for the same word, and the output is a hybrid.
 
**Example: 홈シ어터**
 
![home-theater](/assets/img/posts/sept2025/home-theater.png)
 
> 🏠 1. 자택 — **홈シ어터** or 거실에서 (가장 자주)
 
Korean writes "home theater" as 홈시어터, all Hangul. The model wrote 홈 (Hangul) + シ (katakana) + 어터 (Hangul). シ is the Japanese katakana for "시(shi)." Two transliteration systems fought over one word. Both won partially.
 
<details>
<summary>1 more example</summary>
**하리ントン** — "Harrington" in Korean is 해링턴. The model appears to have taken the Japanese pronunciation (ハリントン), then partially converted it: 하리 (Hangul) + ントン (katakana). This isn't the model mixing Korean and Japanese transliterations of the English name. It's the model starting from the Japanese form and half-translating it into Korean. In other conversations, the same model correctly wrote 해링턴.
 
</details>
---
 
## Does This Have a Name?
 
After collecting these, I searched the literature. Turns out, yes.
 
NLP researchers call this **language confusion** (Marchisio et al., 2024): a model generates output that blends multiple languages unintentionally. **Language drift** (Park & Lee, 2025) is similar: the model shifts to another language as it generates. **Confusion points** mark the exact positions where the switch happens.
 
But most of this research studies **English as the interference source**: English-centric models falling back to English when generating in other languages. What I'm seeing is different. Two non-English languages, Korean and Japanese, interfere with each other. They share a writing system ancestor (Chinese characters) and a loanword system (both adapted from English). Shared kanji/hanja vocabulary and parallel loanword systems blur the boundary. Almost no existing research covers this.
 
---
 
## Why Does This Happen?
 
Four hypotheses. I can't verify any without access to model internals, so these are speculation.
 
**1. CJK tokenizer unification.** GPT-5 redesigned its CJK tokenizer to cut token usage by 30-40%. If Korean and Japanese tokens now share more embedding space, the boundary between them blurs.
 
**2. Shared semantic representation.** The 횡顔/을 particle evidence from Pattern 2 suggests the model "knows" the Korean word internally but outputs the Japanese form. Meaning and grammar are Korean. Only the surface script is Japanese. This points to a shared semantic node with a script-selection failure at the output layer.
 
**3. Loanword competition.** When the model hits an English-origin word in Korean context, two transliteration systems activate: Hangul and katakana. Pattern 4 (홈シ어터) shows them competing at the token level, both winning partially. The 하리ントン case suggests the model sometimes starts from the Japanese transliteration and half-converts it to Korean.
 
**4. GPT-5 transition.** All 12 examples come from September-October 2025, weeks after GPT-5 became the default. I ran the same scenarios on GPT-4o for months. The mixing was not there. Something in the model change shifted the Korean-Japanese boundary.
 
---
 
## Bonus: I Asked ChatGPT Why This Happens
 
It described a backend infrastructure change dated to October 3-4, 2025. "Entity tagging restructuring." "Brand exposure balancing algorithms." It cited internal systems and testing timelines. All delivered with complete confidence.
 
None of it was real. OpenAI never published any such update. ChatGPT made up a technical explanation for its own bug.
 
One more data point for the observatory.
