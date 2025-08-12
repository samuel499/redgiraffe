import { formatTime } from "@/lib/utils"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

export default function VideoControls({
  isPlaying,
  isMuted,
  currentTime,
  duration,
  isFullscreen,
  onPlayPause,
  onMute,
  onFullscreen,
  onSeek,
}: {
  isPlaying: boolean
  isMuted: boolean
  currentTime: number
  duration: number
  isFullscreen: boolean
  onPlayPause: () => void
  onMute: () => void
  onFullscreen: (e: React.MouseEvent) => void
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void
}) {
  return (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      {/* Top Controls */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-2 pointer-events-auto">
        <button
          onClick={onFullscreen}
          className="w-8 sm:w-10 h-8 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm z-50 relative"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          style={{ pointerEvents: "auto" }}
        >
          {isFullscreen ? (
            <Minimize className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
          ) : (
            <Maximize className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
          )}
        </button>
      </div>
      {/* Center Play/Pause Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <button
          onClick={onPlayPause}
          className="w-12 sm:w-16 h-12 sm:h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border-2 border-white/30"
        >
          {isPlaying ? (
            <Pause className="w-5 sm:w-8 h-5 sm:h-8 text-white" />
          ) : (
            <Play className="w-5 sm:w-8 h-5 sm:h-8 text-white ml-1" />
          )}
        </button>
      </div>
      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 pointer-events-auto">
        {/* Progress Bar */}
        <div
          className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full cursor-pointer mb-2 sm:mb-3 group/progress"
          onClick={onSeek}
        >
          <div
            className="h-full bg-primary rounded-full transition-all duration-150 group-hover/progress:bg-primary-400"
            style={{
              width: `${duration && duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              maxWidth: "100%",
            }}
          />
        </div>
        {/* Control Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onPlayPause}
              className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            >
              {isPlaying ? (
                <Pause className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              ) : (
                <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={onMute}
              className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
            >
              {isMuted ? (
                <VolumeX className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              ) : (
                <Volume2 className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
              )}
            </button>
            <span className="text-white text-xs sm:text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
          <div className="text-white text-xs sm:text-sm font-medium hidden sm:block">
            RedGirraffe Commercial Card
          </div>
        </div>
      </div>
    </div>
  )
}