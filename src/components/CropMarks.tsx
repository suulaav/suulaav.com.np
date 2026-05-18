export default function CropMarks() {
  return (
    <div className="fixed inset-0 z-[9995] pointer-events-none" aria-hidden>
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-ink/20" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-ink/20" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-ink/20" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-ink/20" />
    </div>
  );
}
