export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Choose your learning path",
      description: "Pick from curated projects and tutorials.",
    },
    {
      step: "2",
      title: "Follow video tutorials",
      description: "Watch step-by-step lessons embedded right in the app.",
    },
    {
      step: "3",
      title: "Code in real-time",
      description: "Practice as you go with our VS-Code-like editor.",
    },
    {
      step: "4",
      title: "Download your projects",
      description: "Export your finished work and keep it forever.",
    },
  ];

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
      <ol className="space-y-8">
        {steps.map((item) => (
          <li key={item.step} className="flex items-start gap-4">
            <span className="text-gradient text-2xl font-bold">
              {item.step}
            </span>
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-zinc-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
