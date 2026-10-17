---
layout: ../../components/ProjectPost.astro
title: "Your Project Title"
year: "Month YYYY – present"   # contains "present" → ONGOING stamp, otherwise WRAPPED UP
location: "City, Country"
# COLOR: pick one or use any hex — purple #CCA0FF · yellow #FFDC58 · green #AEF5D4 · pink #FEA7CC · blue #33BFFF
color: "#CCA0FF"
tags: ["Tag One", "Tag Two", "Tag Three"]
# ORDER controls the sort position on the projects page (lower = higher up)
order: 2
# OPTIONAL fields — remove lines you don't need:
sticker: "/stickers/characters/girl-with-books.png"      # hops when clicked on the title card
image: "/news-pics/your-photo.png"             # polaroid, click to enlarge
imageCaption: "Short caption under the polaroid."
# LINKS: buttons at the top of the sidebar (icon is optional, any Remix Icon class)
links:
  - label: "Link text"
    url: "https://example.com"
    icon: "ri-external-link-line"
# OUTPUTS: file names from src/pages/outputs (without .md), shown as polaroid cards
outputs: ["giving-credit"]
collaborators:
  - name: "Collaborator Name"
    url: "https://example.com"                 # optional
# NOTE CARDS: click-to-open cards in the sidebar
notes:
  - icon: "💡"
    title: "Note title"
    text: "Text that appears when the card is clicked."
---

Write a 2–3 sentence description of the project here. What is it about and what's the main focus or contribution?

You can add more paragraphs, **bold**, *italic*, [links](https://example.com) and `## headings`.
