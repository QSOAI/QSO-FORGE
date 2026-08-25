interface TechnologyProps {
  messages: {
    headline: string;
    subheadline: string;
    stack: string[];
  };
}

export function Technology({ messages }: TechnologyProps) {
  return (
    <section className="section-padding" aria-labelledby="technology-heading">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="technology-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-4 body-md text-primary-600">
            {messages.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {messages.stack.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium bg-white border border-primary-200 text-primary-700 rounded-full hover:border-accent-300 hover:text-accent-600 transition-colors animate-slide-up"
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