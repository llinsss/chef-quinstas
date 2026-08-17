import { defineField, defineType } from "sanity";

const requiredText = (label: string) =>
  defineField({
    name: label,
    title: label.charAt(0).toUpperCase() + label.slice(1),
    type: "string",
    validation: (rule) => rule.required(),
  });

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "hero", title: "Homepage hero", default: true },
    { name: "contact", title: "Contact & availability" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    defineField({
      name: "heroKicker",
      title: "Hero eyebrow",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "heroCopy",
      title: "Hero introduction",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "available",
      title: "Available for aviation inquiries",
      type: "boolean",
      group: "contact",
      initialValue: true,
    }),
    defineField({
      name: "contactEmail",
      title: "Public email",
      type: "email",
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Public phone",
      type: "string",
      group: "contact",
      description: "Include the country code, for example +234…",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "contact",
      initialValue: "Abuja, Nigeria",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram profile URL",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "linkedInUrl",
      title: "LinkedIn profile URL",
      type: "url",
      group: "contact",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      group: "seo",
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Website settings",
      subtitle: "Homepage, contact and SEO",
    }),
  },
});

const profile = defineType({
  name: "profile",
  title: "About Chef Quinstas",
  type: "document",
  groups: [
    { name: "story", title: "Professional story", default: true },
    { name: "credentials", title: "Credentials" },
  ],
  fields: [
    defineField({
      name: "intro",
      title: "Short introduction",
      type: "text",
      rows: 3,
      group: "story",
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "bio",
      title: "Professional biography",
      type: "array",
      of: [{ type: "block" }],
      group: "story",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "philosophy",
      title: "Culinary philosophy",
      type: "text",
      rows: 5,
      group: "story",
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      group: "story",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "practicalYears",
      title: "Years of practical experience",
      type: "number",
      group: "credentials",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "industryYears",
      title: "Years of industry experience",
      type: "number",
      group: "credentials",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      group: "credentials",
      of: [
        {
          type: "object",
          fields: [
            requiredText("school"),
            requiredText("qualification"),
            defineField({
              name: "year",
              title: "Year / cohort",
              type: "string",
            }),
          ],
          preview: { select: { title: "school", subtitle: "qualification" } },
        },
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      group: "credentials",
      of: [
        {
          type: "object",
          fields: [
            requiredText("title"),
            defineField({
              name: "issuer",
              title: "Issuing organisation",
              type: "string",
            }),
            defineField({ name: "date", title: "Date", type: "date" }),
          ],
          preview: { select: { title: "title", subtitle: "issuer" } },
        },
      ],
    }),
    defineField({
      name: "leadership",
      title: "Leadership & professional involvement",
      type: "array",
      group: "credentials",
      of: [
        {
          type: "object",
          fields: [
            requiredText("role"),
            requiredText("organisation"),
            defineField({
              name: "summary",
              title: "Summary",
              type: "text",
              rows: 3,
            }),
          ],
          preview: { select: { title: "role", subtitle: "organisation" } },
        },
      ],
    }),
  ],
  preview: {
    select: { media: "portrait" },
    prepare: ({ media }) => ({
      title: "Chef Quinstas profile",
      subtitle: "Biography and credentials",
      media,
    }),
  },
});

const portfolioItem = defineType({
  name: "portfolioItem",
  title: "Portfolio media",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Caption / title",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Nigerian cuisine",
          "Continental & international",
          "Private-jet catering",
          "Breakfast & brunch",
          "Salads & healthy cuisine",
          "Main courses",
          "Pastries & desserts",
          "Event catering",
          "Behind the scenes",
          "Portraits",
          "Videos",
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for visitors using screen readers.",
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: "video",
      title: "Upload video",
      type: "file",
      options: { accept: "video/mp4,video/quicktime,video/webm" },
    }),
    defineField({
      name: "videoUrl",
      title: "Or use an external video URL",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Feature on homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 100,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  validation: (rule) =>
    rule.custom((value) =>
      value?.image || value?.video || value?.videoUrl
        ? true
        : "Add a photo, upload a video, or provide a video URL.",
    ),
  preview: {
    select: {
      title: "title",
      media: "image",
      category: "category",
      order: "order",
    },
    prepare: ({ title, media, category, order }) => ({
      title,
      media,
      subtitle: `${String(order ?? "—").padStart(2, "0")} · ${category ?? "Uncategorised"}`,
    }),
  },
});

const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "displayOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(260),
    }),
    defineField({
      name: "highlights",
      title: "Key offerings",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.max(5),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 100,
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "active",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", order: "order", active: "active" },
    prepare: ({ title, order, active }) => ({
      title,
      subtitle: `${order ?? "—"} · ${active === false ? "Hidden" : "Visible"}`,
    }),
  },
});

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "attribution",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "role", title: "Role / company", type: "string" }),
    defineField({
      name: "approved",
      title: "Approved for publication",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: { select: { title: "attribution", subtitle: "quote" } },
});

export const schemaTypes = [
  siteSettings,
  profile,
  portfolioItem,
  service,
  testimonial,
];
