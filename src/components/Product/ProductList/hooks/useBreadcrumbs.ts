import { useMemo } from "react";

interface Breadcrumb {
  name: string;
  link: string;
}

interface UseBreadcrumbsParams {
  categorySlug?: string;
  typeSlug?: string;
  subSlug?: string;
}

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function useBreadcrumbs({
  categorySlug,
  typeSlug,
  subSlug,
}: UseBreadcrumbsParams): Breadcrumb[] {

  return useMemo(() => {
    const breadcrumbs: Breadcrumb[] = [];

    if (categorySlug) {
      breadcrumbs.push({
        name: capitalize(categorySlug.replace(/-/g, " ")),
        link: `/product/category/${categorySlug}`,
      });
    }

    if (categorySlug && typeSlug) {
      breadcrumbs.push({
        name: capitalize(typeSlug.replace(/-/g, " ")),
        link: `/product/category/${categorySlug}/${typeSlug}`,
      });
    }

    if (categorySlug && typeSlug && subSlug) {
      breadcrumbs.push({
        name: capitalize(subSlug.replace(/-/g, " ")),
        link: `/product/category/${categorySlug}/${typeSlug}/${subSlug}`,
      });
    }

    return breadcrumbs;
  }, [categorySlug, typeSlug, subSlug]);
}
