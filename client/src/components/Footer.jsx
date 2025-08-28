export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Dev-Luwak" },
    { name: "Email", url: "mailto:pranavc230@gmail.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pc-964894253/" },
  ];

  return (
    <footer className="px-6 py-8 bg-black text-zinc-400 text-center text-sm mt-auto shadow-lg shadow-black/30">
      <div className="mb-2">Made with ❤️ by Dev-Luwak</div>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
