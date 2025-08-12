import { AlertCircle } from "lucide-react"

export default function VideoErrorOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-red-900/20 rounded-xl sm:rounded-2xl">
      <div className="text-center text-white p-6 sm:p-8">
        <AlertCircle className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 text-red-400" />
        <h3 className="text-lg sm:text-xl font-bold mb-2">Video Unavailable</h3>
        <p className="text-sm opacity-90 mb-4">Unable to load video content</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary hover:bg-primary-600 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          Reload Page
        </button>
      </div>
    </div>
  )
}