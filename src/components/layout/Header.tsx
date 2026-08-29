"use client";

import * as React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full border-b border-gray-200 bg-white transition-all duration-200",
        scrolled
          ? "bg-white/94 backdrop-blur-md shadow-[0_2px_12px_rgba(17,24,39,.05)]"
          : "",
      ].join(" ")}
    >
      <div className="cfige-container flex h-16 items-center justify-between md:h-20">
        <a
          href="#accueil"
          className="flex items-center"
          aria-label={`${site.name} — ${site.fullName}`}
        >
          <Image
            src="/images/logo-white.png"
            alt={`${site.name} — ${site.fullName}`}
            width={130}
            height={40}
            priority
            className="h-9 w-auto md:h-10"
          />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary focus-visible:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="#contact">S&apos;inscrire</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onOpenChange={setOpen} />
    </header>
  );
}
