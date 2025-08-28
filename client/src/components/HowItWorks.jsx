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
    <section
      className="px-6 py-20 shadow-lg shadow-black/30"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <ol className="flex flex-col items-center space-y-8">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex flex-row items-center bg-zinc-900 bg-opacity-80 rounded-xl px-8 py-6 shadow-md w-full max-w-xl transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-zinc-800"
            >
              {/* Left: Number */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
                <span className="text-gradient text-2xl font-bold">
                  {item.step}
                </span>
              </div>
              {/* Right: Text part */}
              <div className="flex flex-col justify-center ml-8 text-left w-full">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-zinc-300">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
