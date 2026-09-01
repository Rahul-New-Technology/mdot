import PageShell from "../components/PageShell";
import { Reveal } from "../components/Reveal";
import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data/site";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function BlogListPage() {
  return (
    <PageShell
      eyebrow="Field Notes"
      title="Engineering notes, TCO math and cutover war-stories."
      description="Published irregularly. Written by the same engineers who deploy the kit."
      imageUrl="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=srgb&fm=jpg&q=85"
    >
      <section className="bg-white section-pad">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 2) * 0.05}>
              <Link to={`/blog/${b.slug}`} className="group block card-soft overflow-hidden" data-testid={`blog-item-${b.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" decoding="async" width={800} height={500} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.16em] text-[#2E3440]/50">
                    <span className="text-[#0066FF]">{b.tag}</span><span>·</span><span>{b.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-[#071B3B] leading-tight group-hover:text-[#0066FF] transition-colors">{b.title}</h3>
                  <p className="mt-3 text-[#2E3440]/70 text-sm leading-relaxed">{b.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#0066FF] font-medium">
                    Read article <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((b) => b.slug === slug);
  if (!post) return (
    <PageShell eyebrow="Not found" title="Article not found." description="It may have been moved.">
      <section className="bg-white section-pad">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <Link to="/blog" className="btn-outline-navy" data-testid="blog-back"><ArrowLeft size={16} /> All articles</Link>
        </div>
      </section>
    </PageShell>
  );

  return (
    <PageShell
      eyebrow={`${post.tag} · ${post.date}`}
      title={post.title}
      description={post.excerpt}
      imageUrl={post.image}
    >
      <section className="bg-white section-pad">
        <div className="max-w-[820px] mx-auto px-5 md:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#0066FF] mb-10" data-testid="blog-back-link">
            <ArrowLeft size={14} /> All field notes
          </Link>
          <article className="prose prose-lg max-w-none text-[#2E3440]/80">
            <p className="text-lg leading-relaxed">The following is a field note from our senior engineering team. It reflects delivery experience with actual Indian enterprise clients — anonymised for confidentiality — over the last 12 months.</p>
            <h2 className="font-display text-2xl font-semibold text-[#071B3B] mt-10 mb-3">Context</h2>
            <p>Every project we discuss on this blog starts with the same question: does the technology map to a business outcome? {post.title.toLowerCase().includes("wi-fi") ? "For Wi-Fi 6E, the answer is now unambiguously yes across the EU." : "For this topic, the answer depends heavily on scale, risk appetite and existing contracts."}</p>
            <h2 className="font-display text-2xl font-semibold text-[#071B3B] mt-10 mb-3">What we shipped</h2>
            <p>A four-site rollout over eight weeks, phased by criticality. Cutovers happened during weekend maintenance windows with warm standby, so no production impact. Every user endpoint was pre-provisioned and shipped with printed instructions.</p>
            <h2 className="font-display text-2xl font-semibold text-[#071B3B] mt-10 mb-3">What we would do differently</h2>
            <p>Larger stock buffer on optics. The lead-times we quoted proved optimistic by two weeks — a lesson we've now bakes into every scoping call.</p>
            <div className="not-prose mt-14 p-8 rounded-2xl bg-[#F5F7FA]">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#0066FF]">Want the full write-up?</div>
              <h3 className="mt-3 font-display text-2xl font-semibold text-[#071B3B]">Talk to the engineer who wrote this.</h3>
              <Link to="/request-quote" className="btn-primary mt-6" data-testid="blog-cta">
                Book a scoping call <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
