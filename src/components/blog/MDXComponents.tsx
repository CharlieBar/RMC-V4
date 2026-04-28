import Link from "next/link";
import Image from "next/image";
import type { MDXComponents } from "mdx/types";

function slugify(text: string): string {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h2
        id={id}
        className="font-serif text-navy leading-tight mt-12 mb-4 scroll-mt-28"
        style={{ fontSize: "clamp(22px, 2vw, 28px)" }}
        {...props}
      >
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const id = slugify(String(children));
    return (
      <h3
        id={id}
        className="font-serif text-navy leading-snug mt-8 mb-3 text-[20px] scroll-mt-28"
        {...props}
      >
        {children}
      </h3>
    );
  },

  p: ({ children, ...props }) => (
    <p
      className="text-grey-700 leading-[1.85] text-[17px] mb-5"
      {...props}
    >
      {children}
    </p>
  ),

  a: ({ href = "", children, ...props }) => {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-red underline underline-offset-2 hover:text-red-dark transition-colors duration-200"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-red underline underline-offset-2 hover:text-red-dark transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-red pl-6 my-8 italic text-grey-500 text-[17px] leading-relaxed"
      {...props}
    >
      {children}
    </blockquote>
  ),

  ul: ({ children, ...props }) => (
    <ul
      className="list-none pl-0 mb-6 space-y-2"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      className="list-none pl-0 mb-6 space-y-2 counter-reset-[item]"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li
      className="flex items-start gap-3 text-grey-700 text-[16px] leading-relaxed"
      {...props}
    >
      <span
        className="w-1.5 h-1.5 rounded-full bg-red shrink-0 mt-[10px]"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  ),

  code: ({ children, ...props }) => (
    <code
      className="bg-grey-100 px-1.5 py-0.5 text-sm font-mono rounded-sm text-navy"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }) => (
    <pre
      className="bg-navy text-white p-6 overflow-x-auto my-8 text-sm font-mono leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),

  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    return (
      <span className="block my-8 relative w-full aspect-video">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          {...(props as Record<string, unknown>)}
        />
      </span>
    );
  },

  strong: ({ children, ...props }) => (
    <strong className="font-bold text-navy" {...props}>
      {children}
    </strong>
  ),

  hr: () => <hr className="border-grey-100 my-10" />,
};
