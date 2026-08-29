import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";

function FeaturedCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white lg:col-span-2 lg:row-span-2">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
        <Badge variant="primary" className="absolute left-4 top-4">
          {post.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CalendarDays className="h-4 w-4" />
          {post.date}
        </div>
        <h3 className="mt-3 text-[22px] font-semibold leading-7 text-gray-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{post.excerpt}</p>
        <a
          href={`#blog`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Lire l&apos;article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

function CompactCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group flex h-full overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="relative w-28 shrink-0 overflow-hidden sm:w-32">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CalendarDays className="h-4 w-4" />
          {post.date}
        </div>
        <span className="mt-1 text-xs font-semibold text-primary">
          {post.category}
        </span>
        <h3 className="mt-1 text-base font-semibold leading-6 text-gray-900">
          {post.title}
        </h3>
        <a
          href="#blog"
          className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Lire l&apos;article
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export function BlogSection() {
  const [featured, ...others] = blogPosts;
  return (
    <section id="blog" className="cfige-section bg-white" aria-labelledby="blog-title">
      <div className="cfige-container">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Actualités
          </p>
          <h2
            id="blog-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Actualités &amp; conseils
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <FeaturedCard post={featured} />
          {others.map((post) => (
            <CompactCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
