export function Card({ className = "", children }) {
  return (
    <div className={`border-gradient rounded-2xl`}>
      <div className={`rounded-2xl bg-[#18181B] p-6 ${className}`}>{children}</div>
    </div>
  );
}
