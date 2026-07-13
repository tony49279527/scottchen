"use client";

export default function BackButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" onClick={() => window.history.back()} className={className}>
      {children}
    </button>
  );
}
