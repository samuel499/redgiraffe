export default function VideoLoadingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl sm:rounded-2xl">
      <div className="flex items-center gap-3 text-white">
        <div className="w-5 sm:w-6 h-5 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        <span className="text-sm sm:text-base">Loading video...</span>
      </div>
    </div>
  )
}