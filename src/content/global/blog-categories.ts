// src/content/global/blog-categories.ts
// ─────────────────────────────────────────────────────────
// Rand Medical Center — Blog Categories
// ─────────────────────────────────────────────────────────

import type { BlogCategoryContent } from "@/types/content";

export const blogCategories: BlogCategoryContent[] = [
  {
    seo: {
      title: "Pain Management Articles | Rand Medical Center Blog",
      description:
        "Tips and information about managing chronic and acute pain from the pain management team at Rand Medical Center in Arlington Heights, IL.",
    },
    name: "Pain Management",
    slug: "pain-management",
    description:
      "Tips and information about managing chronic and acute pain — from treatment options to home care strategies.",
    heroHeadline: "Pain Management Articles and Resources",
  },
  {
    seo: {
      title: "Injury Recovery Articles | Rand Medical Center Blog",
      description:
        "Guides for recovering from work injuries, auto accidents, sports injuries, and more from Rand Medical Center in Arlington Heights, IL.",
    },
    name: "Injury Recovery",
    slug: "injury-recovery",
    description:
      "Practical guides for recovering from injuries — including timelines, expectations, and return-to-activity advice.",
    heroHeadline: "Injury Recovery Guides and Resources",
  },
  {
    seo: {
      title: "Workers' Compensation Articles | Rand Medical Center Blog",
      description:
        "Information about work injuries, workers' comp claims, and your rights as an injured worker in Illinois.",
    },
    name: "Workers' Compensation",
    slug: "workers-compensation",
    description:
      "Information about work injuries, workers' comp claims, your rights in Illinois, and what to expect during the process.",
    heroHeadline: "Workers' Compensation Resources",
  },
  {
    seo: {
      title: "Physical Therapy Articles | Rand Medical Center Blog",
      description:
        "Exercise tips, rehabilitation guides, and physical therapy insights from Rand Medical Center in Arlington Heights, IL.",
    },
    name: "Physical Therapy",
    slug: "physical-therapy",
    description:
      "Exercise tips, rehabilitation guides, and information about how physical therapy supports injury recovery.",
    heroHeadline: "Physical Therapy Tips and Guides",
  },
  {
    seo: {
      title: "Prevention & Wellness Articles | Rand Medical Center Blog",
      description:
        "Injury prevention tips, ergonomic advice, and wellness strategies from Rand Medical Center.",
    },
    name: "Prevention & Wellness",
    slug: "prevention-wellness",
    description:
      "Injury prevention tips, ergonomic advice, and strategies to stay healthy and avoid common injuries.",
    heroHeadline: "Prevention and Wellness Resources",
  },
  {
    seo: {
      title: "Patient Resources | Rand Medical Center Blog",
      description:
        "Helpful information about insurance, appointments, forms, and what to expect at Rand Medical Center.",
    },
    name: "Patient Resources",
    slug: "patient-resources",
    description:
      "Helpful information about insurance, appointments, forms, and what to expect when visiting our clinic.",
    heroHeadline: "Patient Resources and Guides",
  },
];
