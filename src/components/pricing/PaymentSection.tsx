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
    <div className="flex flex-col items-center text-center rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)] transition-all duration-200 hover:-translate-y-[3px]">
      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
        {icon}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
        Étape {number}
      </span>
      <h3 className="mt-2 text-[16px] font-bold leading-5 text-[#17212B]">
        {title}
      </h3>
      <p className="mt-1 text-[12px] font-semibold text-primary">{subtitle}</p>
      <p className="mt-2 text-[12px] leading-[1.6] text-[#69737D]">
        {description}
      </p>
    </div>
  );
}

export function PaymentSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="payment-title">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            PAIEMENT —
          </p>
          <h2 id="payment-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Conditions de Paiement
          </h2>
          <p className="mt-3 text-[13px] leading-[1.6] text-[#69737D]">
            Simple et flexible
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PaymentStep
            number="01"
            title="50 %"
            subtitle="À l&apos;inscription"
            description="Un acompte de 50 % est requis pour valider l&apos;inscription."
            icon={<CreditCard className="h-6 w-6" strokeWidth={1.8} />}
          />
          <PaymentStep
            number="02"
            title="Paiement échelonné"
            subtitle="Possible pour les formations longues"
            description="Étalez votre paiement sur la durée de votre formation sans frais supplémentaires."
            icon={<CalendarClock className="h-6 w-6" strokeWidth={1.8} />}
          />
          <PaymentStep
            number="03"
            title="Contrats annuels"
            subtitle="Tarification spéciale disponible"
            description="Des tarifs préférentiels pour les engagements sur l&apos;année avec entreprises et institutions."
            icon={<FileCheck2 className="h-6 w-6" strokeWidth={1.8} />}
          />
        </div>
      </div>
    </section>
  );
}