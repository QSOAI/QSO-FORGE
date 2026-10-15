interface WhoWeWorkWithProps {
  messages: {
    headline: string;
    subheadline: string;
    sectors: string[];
    note: string;
  };
}

export function WhoWeWorkWith({ messages }: WhoWeWorkWithProps) {
  return (
    <section className="section-padding bg-ledger-dark border-y border-ledger-border" aria-labelledby="whoweworkwith-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="whoweworkwith-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-ledger-muted">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {messages.sectors.map((sector, index) => (
            <div
              key={sector}
              className="text-center p-6 bg-ledger-dark border border-ledger-border rounded-sm hover:border-ledger-light/20 transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="heading-sm text-ledger-light">{sector}</h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ledger-muted">
          {messages.note}
        </p>
      </div>
    </section>
  );
}