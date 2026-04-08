export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-cream">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-burnt-orange border-t-transparent"></div>
    </div>
  );
}
