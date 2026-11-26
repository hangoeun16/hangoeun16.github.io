---
layout: page
title: about
permalink: /
tagline: narrative AI · long-horizon LLM analysis · KR/EN
photos:
  - src: /assets/img/home/window.jpg
    alt: Sunlight through a curtained window onto books on a desk
  - src: /assets/img/home/bust.jpg
    alt: Classical marble bust in a shaft of light
---

<div class="photos">
{%- for ph in page.photos %}
  <img src="{{ ph.src | relative_url }}" alt="{{ ph.alt }}">
{%- endfor %}
</div>

<div class="about" markdown="1">

I'm Summer Han. M.S. from the University of Chicago, B.A. in Mathematics from Grinnell College.

I started college as a Classics major. Classics never die, and the rhetoric is beautiful. Then I found math does the same thing without words: symbols become language, and that language describes the world. I graduated in math and went to grad school, where the work shifted to text data, NLP, and knowledge graphs.

I've also written in narrative communities for years. I serialized fiction to 3K+ subscribers in high school and ran a storytelling account to 3K followers in college, both in Korean. I keep them anonymous, but I'm happy to share over coffee.

That's why I pay attention to how LLMs handle long narrative. Most benchmarks test single turns. I watch what happens at turn 200: characters flatten, Korean decays into translationese, timelines lose coherence. This site is where I keep notes on what I find.

</div>

