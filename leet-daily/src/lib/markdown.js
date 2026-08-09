import { parse } from "yaml";

export function parseMarkdown(rawMarkdown) {
  const normalizedMarkdown = rawMarkdown.replace(/\r\n/g, "\n");

  const frontmatterMatch = normalizedMarkdown.match(
    /^---\n([\s\S]*?)\n---\n?/
  );

  if (!frontmatterMatch) {
    return {
      content: normalizedMarkdown.trim(),
    };
  }

  const frontmatter = parse(frontmatterMatch[1]);

  const content = normalizedMarkdown
    .slice(frontmatterMatch[0].length)
    .trim();

  return {
    ...frontmatter,
    content,
  };
}