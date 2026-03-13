/**
 * Utilitaires pour les vidéos YouTube embed
 */

const YOUTUBE_PATTERNS = [
  /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  /(?:youtube\.com\/watch\?.*v=)([a-zA-Z0-9_-]{11})/,
  /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
];

export function extractYouTubeId(url: string): string | null {
  const trimmed = url.trim();
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export interface ParsedVideo {
  id: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export function parseVideoUrls(portfolioUrls: string | undefined): ParsedVideo[] {
  if (!portfolioUrls) return [];
  return portfolioUrls
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(url => {
      const id = extractYouTubeId(url);
      if (!id) return null;
      return {
        id,
        embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
        thumbnailUrl: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      };
    })
    .filter((v): v is ParsedVideo => v !== null);
}
