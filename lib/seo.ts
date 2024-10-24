export const getSeoMetadata = (title: string, description: string, keywords: string, url: string) => {
    return {
      title,
      description,
      keywords,
      author: "Poke Pro",
      "og:title": title,
      "og:description": description,
      "og:url": url,
      "og:type": "website",
      "og:image": `${url}/og-image.jpg`,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": `${url}/twitter-image.jpg`,
    };
  };
  