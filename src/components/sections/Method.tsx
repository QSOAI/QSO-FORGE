interface MethodProps {
  messages: {
    headline: string;
    subheadline: string;
    steps: Array<{ label: string; description: string }>;
  };
}

export function Method({ messages }: MethodProps) {
  return (
    <section className="section-padding" aria-labelledby="method-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="method-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-primary-600">
            {messages.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {messages.steps.map((step, index) => (
            <article
              key={step.label}
              className="group relative p-6 bg-white border border-primary-200 rounded-lg hover:border-accent-300 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-accent-600 uppercase tracking-wider">
                  {index + 1}. {step.label}
                </span>
              </div>
              <h3 className="heading-sm text-primary-950 mb-2">
                {step.label}
              </h3>
              <p className="body-sm text-primary-600">
                {step.description}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-100 group-hover:bg-accent-500 group-hover:h-1 transition-all duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}