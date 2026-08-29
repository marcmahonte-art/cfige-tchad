import { site } from "@/data/site";

const WHATSAPP_COLOR = "#25D366";

function whatsappHref(number: string) {
  const digits = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}`;
}

export function WhatsAppButton() {
  const href = whatsappHref(site.whatsappNumber);
  return (
    <a
      href={href}
      aria-label="Contacter le CFIGE sur WhatsApp"
      className="fixed bottom-4 right-4 z-[110] flex h-14 w-14 items-center justify-center rounded-full shadow-cfige-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] md:bottom-6 md:right-6"
      style={{ backgroundColor: WHATSAPP_COLOR }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.156 5.329 5.485 0 12.026 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.001 6.54-5.33 11.868-11.871 11.868a11.9 11.9 0 01-5.703-1.446L.057 24zm6.597-3.742l.478-.296a9.916 9.916 0 003.056 1.116 9.62 9.62 0 009.72-9.64 9.583 9.583 0 00-2.816-6.784A9.607 9.607 0 0012.026 2.56 9.62 9.62 0 002.385 12.2a9.78 9.78 0 001.045 4.43l-.3.481 1.527.789zM16.793 14.6c-.223-.112-1.327-.655-1.533-.729-.206-.075-.356-.112-.505.113-.15.224-.578.729-.708.878-.131.15-.261.168-.487.056-.225-.112-.953-.351-1.815-1.119-.671-.596-1.124-1.333-1.255-1.558-.131-.225.013-.347.098-.46.101-.101.225-.262.337-.393.113-.131.15-.225.225-.375.075-.15.038-.281-.019-.394-.056-.112-.505-1.218-.692-1.669-.182-.438-.368-.381-.505-.388l-.43-.007a.837.837 0 00-.6.281c-.206.225-.787.77-.787 1.877 0 1.108.809 2.178.92 2.328.112.15 1.582 2.417 3.833 3.389.536.231 1.003.369 1.347.473.566.171 1.082.147 1.489.089.454-.064 1.327-.542 1.513-1.066.187-.524.187-.973.131-1.066-.056-.094-.206-.15-.43-.262z" />
      </svg>
    </a>
  );
}
