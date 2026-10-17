---
layout: ../../components/PublicationPost.astro
# TYPE: choose one → paper | thesis | poster | talk | workshop | abstract
type: "paper"
title: "Your output title here"
authors:
  - name: "Kate Blomgren"
    url: "https://kateblomgren.github.io"   # optional — remove if no link
  - name: "Co-Author Name"
    url: ""                                   # leave empty if no link
venue: "Conference / Journal / Institution, Year"
image: "/your-cover-image.png"
imageCaption: "Short annotation or description shown in the polaroid caption area."  # optional
pubDate: "YYYY-MM-DD"  # full date controls sort order; only year is displayed
# OPTIONAL fields — remove lines you don't need:
pdf: "https://link-to-pdf.com"
doi: "https://doi.org/..."
link: "https://..."   # page about this output on the lab website → "View on lab website" button
keywords: "keyword1, keyword2, keyword3"
# RELATED: links shown on a "Related" note in the sidebar (icon is optional, any Remix Icon class)
related:
  - label: "Link text"
    url: "https://example.com"
    icon: "ri-external-link-line"
# SIDEBAR NOTE CARDS — each appears as a small toggle card in the sidebar
# icon is optional (any emoji), title is required, text revealed on click
notes:
  - icon: "💡"
    title: "Note title"
    text: "Text that appears when the card is clicked."
---

Write your abstract or description here. This text appears on the individual output page.

You can use **bold**, *italic*, and [links](https://example.com).
