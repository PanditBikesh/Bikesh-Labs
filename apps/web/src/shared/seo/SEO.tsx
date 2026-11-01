
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import defaultSeo from "./defaultSeo";

type Props = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export default function SEO({
  title,
  description,
  noIndex = false,
}: Props) {
  const location = useLocation();

  const pageTitle = title
    ? `${title} | Bikesh Kumar Pandit`
    : defaultSeo.title;

  const pageDescription =
    description ?? defaultSeo.description;

  const canonicalUrl = `${defaultSeo.url}${
    location.pathname === "/"
      ? "/"
      : location.pathname
  }`;

  const imageUrl = `${defaultSeo.url}${defaultSeo.image}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="author"
        content={defaultSeo.author}
      />

      <meta
        name="robots"
        content={noIndex ? "noindex, follow" : "index, follow"}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Bikesh Pandit Portfolio" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content={pageDescription}
      />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
