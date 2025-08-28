export default function Footer() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <footer className="px-6 py-8 bg-black text-zinc-400 text-center text-sm mt-auto">
      <div className="mb-2">Made with ❤️ by CodeOn</div>
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
