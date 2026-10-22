type StarProps = {
  className?: string;
};

// Four-point starburst from the reference layout. Always decorative.
export function Star({ className }: StarProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path d="M50 0Q58 42 100 50Q58 58 50 100Q42 58 0 50Q42 42 50 0Z" fill="currentColor" />
    </svg>
  );
}
