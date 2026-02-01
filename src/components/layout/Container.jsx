export default function Container({
  children,
  className = "",
  full = false,
}) {
  return (
    <div
      className={[
        full
          ? "w-full px-2 sm:px-3 md:px-4"
          : "mx-auto max-w-[1200px] px-4 md:px-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
