// Plain-text preview of a Markdown body for list pages (News, Outputs).
export function excerpt(markdown: string): string {
    return markdown
        .replace(/<[^>]+>/g, ' ')                  // inline HTML (e.g. <img>)
        .replace(/!\[[^\]]*\]\([^)]*\)/g, '')       // images
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')    // links → their text
        .replace(/^#{1,6}\s+/gm, '')               // headings
        .replace(/^\s*[-*+]\s+/gm, '')             // list bullets
        .replace(/(\*\*|__|\*|_|`)/g, '')          // bold, italic, code
        .replace(/\s+/g, ' ')
        .trim()
}
