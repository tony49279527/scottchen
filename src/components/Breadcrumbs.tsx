import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({
  items,
  ariaLabel = "Breadcrumb",
}: {
  items: BreadcrumbItem[];
  ariaLabel?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <nav aria-label={ariaLabel} className="mb-6 text-xs text-industry-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-industry-slate-300">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
