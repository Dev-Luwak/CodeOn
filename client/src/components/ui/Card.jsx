export function Card({ className = "", children }) {
  return (
    <div className={`border-gradient rounded-2xl`}>
      <div
        className={`rounded-2xl bg-[#18181B] p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-zinc-800 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
