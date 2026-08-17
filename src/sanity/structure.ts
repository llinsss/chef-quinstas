import type { StructureResolver } from "sanity/structure";

const singleton = (
  S: Parameters<StructureResolver>[0],
  id: string,
  title: string,
) =>
  S.listItem()
    .title(title)
    .id(id)
    .child(S.document().schemaType(id).documentId(id));

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Chef Quinstas")
    .items([
      singleton(S, "siteSettings", "Website settings"),
      singleton(S, "profile", "About Chef Quinstas"),
      S.divider(),
      S.documentTypeListItem("portfolioItem").title("Photos & videos"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
