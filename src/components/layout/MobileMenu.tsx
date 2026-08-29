"use client";

import * as React from "react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // Bloquer le scroll derrière le menu
  React.useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-full max-w-[360px] px-5 py-6"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
        <SheetDescription className="sr-only">
          Navigation principale du site CFIGE
        </SheetDescription>

        <div className="mb-8 mt-2">
          <span className="text-lg font-bold text-gray-900">{site.name}</span>
        </div>

        <nav aria-label="Navigation mobile" className="flex flex-col">
          {site.nav.map((item) => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className="border-b border-gray-100 py-4 text-base font-medium text-gray-800 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-8">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <a href="#contact">S&apos;inscrire</a>
            </Button>
          </SheetClose>
        </div>

        <div className="mt-auto pt-8 text-sm text-gray-500">
          {site.city}, {site.country}
        </div>
      </SheetContent>
    </Sheet>
  );
}
