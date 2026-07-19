import { Helmet } from "react-helmet-async";

import defaultSeo from "./defaultSeo";

type Props = {
  title?: string;
  description?: string;
};

export default function SEO({
  title,
  description,
}: Props) {
  const pageTitle = title
    ? `${title} | Bikesh Pandit`
    : defaultSeo.title;

  const pageDescription =
    description ?? defaultSeo.description;

  return (
    <Helmet>

      <title>{pageTitle}</title>

      <meta
        name="description"
        content={pageDescription}
      />

      <meta
        name="keywords"
        content={defaultSeo.keywords.join(", ")}
      />

      <meta
        name="author"
        content={defaultSeo.author}
      />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:image"
        content={defaultSeo.image}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta property="og:site_name" content="Bikesh Portfolio" />

      <meta property="og:url" content={defaultSeo.url} />

      <meta property="og:type" content="website" />

      <meta property="og:title" content={pageTitle} />

      <meta
        property="og:description"
        content={pageDescription}
      />

      <meta
        property="og:image"
        content={`${defaultSeo.url}${defaultSeo.image}`}
      />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:locale" content="en_US" />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={pageDescription}
      />

      <meta
        name="twitter:image"
        content={`${defaultSeo.url}${defaultSeo.image}`}
      />

    </Helmet>
  );
}