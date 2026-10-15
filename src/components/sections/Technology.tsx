interface TechnologyProps {
  messages: {
    headline: string;
    subheadline: string;
    stack: string[];
  };
}

export function Technology({ messages }: TechnologyProps) {
  return (
    <section className="section-padding bg-ledger-dark" aria-labelledby="technology-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="technology-heading" className="heading-lg text-ledger-light kinetic">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-ledger-muted">
            {messages.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {messages.stack.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium bg-transparent border border-ledger-border text-ledger-muted rounded-sm font-mono hover:border-ledger-light hover:text-ledger-light transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}