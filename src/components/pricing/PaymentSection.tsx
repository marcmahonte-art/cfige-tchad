import { CreditCard, CalendarClock, FileCheck2 } from "lucide-react";

interface PaymentStepProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

function PaymentStep({ number, title, subtitle, description, icon }: PaymentStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-7 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-md hover:-translate-y-1">
      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-sm ring-4 ring-white">
        {number}
      </span>
      <span className="mt-2 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
        {icon}
      </span>
      <h3 className="text-lg font-bold text-gray-900 leading-snug">
        {title}
      </h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">
        {subtitle}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}

export function PaymentSection() {
  return (
    <section className="cfige-section bg-gray-50 border-b border-gray-200" aria-labelledby="payment-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            FACILITÉS DE RÈGLEMENT
          </p>
          <h2 id="payment-title" className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Modalités &amp; Conditions de Paiement
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Des options souples et adaptées pour financer votre formation en toute sérénité
          </p>
          <span className="mx-auto mt-3 block h-1 w-10 rounded-full bg-primary" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PaymentStep
            number="01"
            title="Acompte de 50 %"
            subtitle="À l'inscription"
            description="Un acompte de 50 % valide formellement votre place et déclenche la remise des supports pédagogiques."
            icon={<CreditCard className="h-7 w-7" strokeWidth={1.8} />}
          />
          <PaymentStep
            number="02"
            title="Paiement échelonné"
            subtitle="Sans frais additionnels"
            description="Étalez le solde restant sur la durée de votre cursus sans aucun intérêt ni frais caché."
            icon={<CalendarClock className="h-7 w-7" strokeWidth={1.8} />}
          />
          <PaymentStep
            number="03"
            title="Contrats & Bon de commande"
            subtitle="Entreprises & Institutions"
            description="Facturation avec délai de règlement sur bon de commande pour les organisations conventionnées."
            icon={<FileCheck2 className="h-7 w-7" strokeWidth={1.8} />}
          />
        </div>
      </div>
    </section>
  );
}
