import { Card } from "./ui/Card";

export default function Features() {
  return (
    <section className="px-6 py-20 bg-[#18181B]">
      <h2 className="text-3xl font-bold text-center mb-12">Why CodeOn?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card>
          <h3 className="text-xl font-semibold mb-2">📺 Watch & Learn</h3>
          <p className="text-zinc-300">
            Follow along with YouTube tutorials directly inside the platform.
          </p>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">💻 Code Along</h3>
          <p className="text-zinc-300">
            Write and test code in our built-in editor with real-time syntax
            highlighting.
          </p>
        </Card>
        <Card>
          <h3 className="text-xl font-semibold mb-2">⚡ See Results</h3>
          <p className="text-zinc-300">
            Instantly preview your project as you build it—no setup needed.
          </p>
        </Card>
      </div>
    </section>
  );
}
