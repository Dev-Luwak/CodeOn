import { Card } from "./ui/Card";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "CodeOn helped me land my first dev job by learning through projects.",
      author: "Jane D.",
    },
    {
      quote:
        "Finally a platform that lets me code while watching tutorials side-by-side.",
      author: "Ravi P.",
    },
    {
      quote: "The live preview feature is a game changer for fast learning.",
      author: "Alex K.",
    },
  ];

  return (
    <section className="px-6 py-20 text-center shadow-lg shadow-black/30">
      <h2 className="text-3xl font-bold mb-12">Loved by Learners</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <p className="text-zinc-300">"{testimonial.quote}"</p>
            <p className="mt-4 font-semibold">— {testimonial.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
