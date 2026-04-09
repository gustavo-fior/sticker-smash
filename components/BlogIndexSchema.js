import { Platform } from 'react-native';

export default function BlogIndexSchema() {
  if (Platform.OS !== 'web') {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Shortcut | Figma Blog",
    "description": "Welcome to Shortcut, Figma’s blog for telling stories about people, and the priorities, plans, and pivots they discover along the path of bringing new ideas to life.",
    "url": "https://www.figma.com/blog/",
    "publisher": {
      "@type": "Organization",
      "name": "Figma",
      "url": "https://www.figma.com/"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}