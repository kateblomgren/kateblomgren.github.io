// Accent colour of each section of the site. Used by the header bar and,
// as a pale tint, by the .paper sheets behind text (see global.css).
const sectionColors = [
    { match: '/', color: '#FEA7CC' },
    { match: '/outputs/', color: '#CCA0FF' },
    { match: '/projects/', color: '#AEF5D4' },
    { match: '/about/', color: '#33BFFF' },
    { match: '/news/', color: '#FFDA34' },
    { match: '/posts/', color: '#FFDA34' },
    { match: '/guestbook/', color: '#FF544F' },
    { match: '/collections/', color: '#AEE8FF' },
]

export function sectionColor(pathname: string): string {
    const normalizedPath = pathname.replace(/\/$/, '') || '/'
    return sectionColors.find((section) =>
        section.match === '/' ? normalizedPath === '/' : normalizedPath.startsWith(section.match.replace(/\/$/, ''))
    )?.color ?? '#FEFFF0'
}
