interface ProblemProps {
  messages: {
    headline: string;
    body: string;
  };
}

export function Problem({ messages }: ProblemProps) {
  return (
    <section className="section-padding bg-primary-50" aria-labelledby="problem-heading">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="problem-heading" className="heading-lg text-primary-950">
            {messages.headline}
          </h2>
          <p className="mt-6 body-lg text-primary-600">
            {messages.body}
          </p>
        </div>
      </div>
    </section>
  );
}