import React from "react";

export default function HeroSection() {
  const full = "CodeOn./";
  const [text, setText] = React.useState("");
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i === full.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-[calc(100vh-4rem)] flex items-center justify-center text-center">
          <div className="space-y-6">
            {/* Centered animated brand mark */}
            <div className="relative inline-block">
              {/* Gradient border wrapper */}
              <div className="relative inline-block rounded-[2rem] p-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500">
                <div className="rounded-[2rem] bg-zinc-950 px-8 py-4">
                  <span className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl text-white select-none">
                    {"{"}
                    <span className="inline-block align-baseline">
                      {text}
                      {/* Type cursor while animating */}
                      {!done && (
                        <span className="inline-block w-[10px] h-[3.75rem] bg-white/90 align-text-bottom animate-pulse ml-1" />
                      )}
                    </span>
                    {"}"}
                  </span>
                </div>
              </div>
              {/* Gentle glow when finished */}
              <div
                className={`pointer-events-none absolute -inset-5 rounded-[2.4rem] bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 blur-3xl transition-opacity duration-1000 ${
                  done ? "opacity-30" : "opacity-0"
                }`}
              />
            </div>
            {/* Subtle one-liner description */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl font-medium text-[#E2E2E2]">
              Learn. Code. Conquer. Instantly code along with expert-led
              tutorials & real-time practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
