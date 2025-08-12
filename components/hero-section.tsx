"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { MousePointer, AlertCircle } from "lucide-react"
import { useScrollAnimations } from "../hooks/use-scroll-animations"
import VideoControls from "./main/hero/video-controls"
import VideoErrorOverlay from "./main/hero/video-error-overlay"
import VideoLoadingOverlay from "./main/hero/video-loading-overlay"
import HeroToggle from "./main/hero/toggle-buttons"

export default function HeroSection() {
  // State
  const [activeToggle, setActiveToggle] = useState<"commercial" | "platforms">("commercial")
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })

  // Video state
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [hasAutoExited, setHasAutoExited] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const END_OF_VIDEO_THRESHOLD = 0.3

  // Handlers ---
  const handleToggleChange = useCallback((value: "commercial" | "platforms") => {
    setActiveToggle(value)
    if (value === "platforms") {
      window.open("https://redgirraffe.com/in/b2b-saas", "_blank")
    }
  }, [])

  const togglePlayPause = useCallback(() => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => setVideoError(true))
      }
    }
  }, [isPlaying, videoError])

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }, [isMuted])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen()
      } else if ((document as any).mozCancelFullScreen) {
        await (document as any).mozCancelFullScreen()
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen()
      }
    } catch (error) {
      console.error("Auto-exit fullscreen error:", error)
    }
  }, [])

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      const newCurrentTime = videoRef.current.currentTime
      setCurrentTime(newCurrentTime)
      if (
        duration > 0 &&
        Math.abs(newCurrentTime - duration) < END_OF_VIDEO_THRESHOLD &&
        isFullscreen &&
        !hasAutoExited
      ) {
        setHasAutoExited(true)
        exitFullscreen()
      }
    }
  }, [duration, isFullscreen, hasAutoExited, exitFullscreen])

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      if (
        videoRef.current.duration &&
        !isNaN(videoRef.current.duration) &&
        isFinite(videoRef.current.duration)
      ) {
        setDuration(videoRef.current.duration)
      }
      setIsLoading(false)
    }
  }, [])

  const handleVideoError = useCallback(() => {
    setVideoError(true)
    setIsLoading(false)
  }, [])

  const handleCanPlay = useCallback(() => {
    if (videoRef.current) {
      if (
        videoRef.current.duration &&
        !isNaN(videoRef.current.duration) &&
        isFinite(videoRef.current.duration)
      ) {
        setDuration(videoRef.current.duration)
      }
      setIsLoading(false)
      setVideoError(false)
    }
  }, [])

  const handleVideoLoad = useCallback(() => {
    if (videoRef.current) {
      if (
        videoRef.current.duration &&
        !isNaN(videoRef.current.duration) &&
        isFinite(videoRef.current.duration)
      ) {
        setDuration(videoRef.current.duration)
      }
      setIsLoading(false)
      setVideoError(false)
    }
  }, [])

  const handleVideoStart = useCallback(() => {
    if (videoRef.current) {
      if (
        videoRef.current.duration &&
        !isNaN(videoRef.current.duration) &&
        isFinite(videoRef.current.duration)
      ) {
        setDuration(videoRef.current.duration)
      }
      setIsLoading(false)
    }
  }, [])

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (videoRef.current && !videoError && duration > 0) {
        const rect = e.currentTarget.getBoundingClientRect()
        const clickX = e.clientX - rect.left
        const percentage = clickX / rect.width
        const newTime = percentage * duration
        const clampedTime = Math.max(0, Math.min(newTime, duration))
        try {
          videoRef.current.currentTime = clampedTime
          setCurrentTime(clampedTime)
          setHasAutoExited(false)
        } catch (error) {
          console.error("Seek error:", error)
        }
      }
    },
    [duration, videoError]
  )

  const toggleFullscreen = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!containerRef.current) {
        console.log("No container ref found")
        return
      }
      try {
        if (!isFullscreen) {
          setHasAutoExited(false)
          if (containerRef.current.requestFullscreen) {
            await containerRef.current.requestFullscreen()
          } else if ((containerRef.current as any).webkitRequestFullscreen) {
            await (containerRef.current as any).webkitRequestFullscreen()
          } else if ((containerRef.current as any).mozRequestFullScreen) {
            await (containerRef.current as any).mozRequestFullScreen()
          } else if ((containerRef.current as any).msRequestFullscreen) {
            await (containerRef.current as any).msRequestFullscreen()
          } else {
            console.log("No fullscreen API available")
          }
        } else {
          await exitFullscreen()
        }
      } catch (error) {
        console.error("Fullscreen error:", error)
      }
    },
    [isFullscreen, exitFullscreen]
  )

  // Effects
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      )
      setIsFullscreen(isCurrentlyFullscreen)
      if (isCurrentlyFullscreen) setHasAutoExited(false)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    document.addEventListener("MSFullscreenChange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timeout)
  }, [isLoading])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const checkVideoReady = () => {
        if (video.readyState >= 3) {
          setIsLoading(false)
          setVideoError(false)
          if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
            setDuration(video.duration)
          }
        }
      }
      checkVideoReady()
      const interval = setInterval(checkVideoReady, 500)
      return () => clearInterval(interval)
    }
  }, [])

  // Render
  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-50"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 ">
        <div className="hero-gradient-animated absolute inset-0" />
      </div>

      {/* Toggle Section */}
      <div className="relative z-10 pt-32 pb-8">
        <div className="container-max section-padding">
          <HeroToggle activeToggle={activeToggle} onChange={handleToggleChange} inView={inView} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Headlines */}
            <div className="space-y-2 sm:space-y-4 px-2 sm:px-0">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-1000 ease-out leading-tight ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  color: "#191A39",
                  transitionDelay: "200ms",
                }}
              >
                The <span className="text-primary-600">&nbsp;Operating</span> &nbsp;System
              </h1>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-1000 ease-out leading-tight ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: "300ms",
                }}
              >
                <span className="text-gray-600">for&nbsp;</span>
                Enterprise
                <span className="text-gray-600">&nbsp;Commerce</span>
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-black/90 max-w-xs sm:max-w-2xl leading-relaxed transition-all duration-1000 ease-out px-2 sm:px-0 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: "400ms",
              }}
            >
              Simplify recurring B2B payments, cut costs, and optimize cash flow in 97+ countries
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: "500ms",
              }}
            >
              <button className="btn-primary text-base px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out w-full sm:w-auto">
                <MousePointer className="w-5 h-5" />
                Request Demo
              </button>
              <button className="btn-secondary text-base px-8 py-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-out w-full sm:w-auto">
                Contact Sales
              </button>
            </div>

            <p className="text-2xl">
              <span className="font-bold">$20B+</span> processed annually
            </p>

            {/* Hero Video */}
            <div
              className={`relative mt-8 sm:mt-12 w-full transition-all duration-1200 ease-out ${
                inView ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: "600ms",
              }}
            >
              <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[150rem] mx-auto">
                <div
                  ref={containerRef}
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out group ${
                    isFullscreen ? "fixed inset-0 z-50 !rounded-none !transform-none !max-w-none w-screen h-screen bg-black" : ""
                  }`}
                >
                  <div className={`relative w-full bg-gray-900 ${isFullscreen ? "h-screen" : "aspect-video"}`}>
                    <video
                      ref={videoRef}
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                      className={`absolute inset-0 w-full h-full bg-black ${
                        isFullscreen ? "object-contain" : "object-cover rounded-xl sm:rounded-2xl"
                      }`}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onCanPlay={handleCanPlay}
                      onLoadedData={handleVideoLoad}
                      onLoadStart={() => setIsLoading(true)}
                      onPlaying={handleVideoStart}
                      onPlay={() => {
                        setIsPlaying(true)
                        setIsLoading(false)
                        setHasAutoExited(false)
                        if (
                          videoRef.current &&
                          videoRef.current.duration &&
                          !isNaN(videoRef.current.duration) &&
                          isFinite(videoRef.current.duration)
                        ) {
                          setDuration(videoRef.current.duration)
                        }
                      }}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onError={handleVideoError}
                      onWaiting={() => setIsLoading(true)}
                      onDurationChange={() => {
                        if (
                          videoRef.current &&
                          videoRef.current.duration &&
                          !isNaN(videoRef.current.duration) &&
                          isFinite(videoRef.current.duration)
                        ) {
                          setDuration(videoRef.current.duration)
                        }
                      }}
                      crossOrigin="anonymous"
                      preload="metadata"
                      loop
                      muted={isMuted}
                      autoPlay
                      playsInline
                    />

                    {/* Video Controls Overlay */}
                    <VideoControls
                      isPlaying={isPlaying}
                      isMuted={isMuted}
                      currentTime={currentTime}
                      duration={duration}
                      isFullscreen={isFullscreen}
                      onPlayPause={togglePlayPause}
                      onMute={toggleMute}
                      onFullscreen={toggleFullscreen}
                      onSeek={handleSeek}
                    />

                    {/* Loading State */}
                    {isLoading && <VideoLoadingOverlay />}

                    {/* Error State */}
                    {videoError && <VideoErrorOverlay />}
                  </div>

                  {/* Hover Overlay */}
                  {!isFullscreen && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce-gentle">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  )
} 