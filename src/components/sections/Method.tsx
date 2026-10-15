interface MethodProps {
  messages: {
    headline: string;
    subheadline: string;
    steps: Array<{ label: string; description: string }>;
  };
}

export function Method({ messages }: MethodProps) {
  return (
    <section className="section-padding bg-ledger-dark" aria-labelledby="method-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="method-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-ledger-muted">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-ledger-border border border-ledger-border rounded-sm overflow-hidden">
          {messages.steps.map((step, index) => (
            <article
              key={step.label}
              className="group relative p-6 bg-ledger-dark hover:bg-ledger-light/[0.02] transition-colors duration-200"
              style={{ animationDelay: `${index * 100}ms` } as any}
            >
              <div className="mb-4">
                <span className="text-xs font-mono font-medium tracking-wide uppercase text-ledger-accent">
                  {index + 1}. {step.label}
                </span>
              </div>
              <h3 className="heading-sm text-ledger-light mb-2 font-serif">
                {step.label}
              </h3>
              <p className="body-sm text-ledger-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
