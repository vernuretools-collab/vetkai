// Set VITE_CHAPTER_SLUG at build time. Default is the Vetkai public site.
export const CHAPTER_SLUG = import.meta.env.VITE_CHAPTER_SLUG || 'YEF-vetkai'

export const CHAPTER_LABEL = CHAPTER_SLUG === 'YEF-thozilnagaram'
  ? 'YEF Thozilnagaram'
  : 'YEF Vetkai'

// Untagged members were created before chapters existed and belong to Vetkai.
const INCLUDE_UNTAGGED = CHAPTER_SLUG === 'YEF-vetkai'

export function isThisChapter(member) {
  const slug = member?.chapterSlug
  if (!slug) return INCLUDE_UNTAGGED
  return slug === CHAPTER_SLUG
}
