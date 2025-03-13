import type React from "react"

/**
 * Parses text with link markers in the format [[link text|URL]] and converts them to actual links
 * @param text The text content with link markers
 * @returns React elements with proper links
 */
export function parseTextWithLinks(text: string): React.ReactNode[] {
  // Regular expression to match [[link text|URL]] pattern
  const linkRegex = /\[\[(.*?)\|(.*?)\]\]/g

  // Split the text by link markers
  const parts = text.split(linkRegex)
  const result: React.ReactNode[] = []

  // Process each part
  for (let i = 0; i < parts.length; i++) {
    // Regular text parts are at even indices (0, 2, 4, etc.)
    if (i % 3 === 0) {
      if (parts[i]) {
        result.push(parts[i])
      }
    }
    // Link text is at indices that are 1 more than multiples of 3 (1, 4, 7, etc.)
    else if (i % 3 === 1) {
      const linkText = parts[i]
      const url = parts[i + 1]

      // Create a link element with terminal-style formatting
      result.push(
        <a
          key={`link-${i}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 underline decoration-dotted underline-offset-4 hover:text-green-200 hover:decoration-solid"
        >
          {linkText}
        </a>,
      )

      // Skip the URL part since we've already used it
      i++
    }
  }

  return result
}

