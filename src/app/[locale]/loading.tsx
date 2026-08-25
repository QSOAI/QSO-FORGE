export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-primary-600">Loading…</p>
      </div>
    </div>
  );
}