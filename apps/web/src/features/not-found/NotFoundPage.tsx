import NotFound from "./components/NotFound";

import { PageTransition } from "@/shared/animations";
import { SEO } from "@/shared/seo";

export default function NotFoundPage() {
  return (
    <PageTransition>

      <SEO
        title="404"
        description="The page you requested could not be found."
      />

      <NotFound />

    </PageTransition>
  );
}