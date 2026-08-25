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
    <section className="section-padding bg-primary-50" aria-labelledby="whoweworkwith-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="whoweworkwith-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-primary-600">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {messages.sectors.map((sector, index) => (
            <div
              key={sector}
              className="text-center p-6 bg-white border border-primary-200 rounded-lg hover:border-accent-300 hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="heading-sm text-primary-950">{sector}</h3>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-primary-500">
          {messages.note}
        </p>
      </div>
    </section>
  );
}