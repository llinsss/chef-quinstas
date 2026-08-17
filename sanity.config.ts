"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "default",
  title: "Chef Quinstas Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/admin",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (options) =>
      options.filter(
        ({ templateId }) => !["siteSettings", "profile"].includes(templateId),
      ),
    actions: (actions, context) =>
      ["siteSettings", "profile"].includes(context.schemaType)
        ? actions.filter(
            ({ action }) => action !== "delete" && action !== "duplicate",
          )
        : actions,
  },
});
