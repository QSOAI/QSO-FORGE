interface ProblemProps {
  messages: {
    headline: string;
    body: string;
  };
}

export function Problem({ messages }: ProblemProps) {
  return (
    <section className="section-padding bg-ledger-dark border-y border-ledger-border" aria-labelledby="problem-heading">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="problem-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-6 body-lg text-ledger-muted kinetic" style={{ transitionDelay: '80ms' } as any}>
            {messages.body}
          </p>
        </div>
      </div>
    </section>
  );
}
