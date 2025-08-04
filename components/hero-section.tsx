"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MousePointer, Play, Pause, Volume2, VolumeX, Maximize, Minimize, AlertCircle } from "lucide-react"
import { useScrollAnimations } from "../hooks/use-scroll-animations"

export default function HeroSection() {
  const [activeToggle, setActiveToggle] = useState<"commercial" | "platforms">("commercial")
  const { ref, inView } = useScrollAnimations({ triggerOnce: true })

  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggleChange = (value: "commercial" | "platforms") => {
    setActiveToggle(value)
    if (value === "platforms") {
      window.open("https://redgirraffe.com/in/b2b-saas", "_blank")
    }
  }

  // Fullscreen event listeners
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      )
      setIsFullscreen(isCurrentlyFullscreen)
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

  // Timeout fallback for loading state
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log("Clearing loading state via timeout fallback")
        setIsLoading(false)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [isLoading])

  // Check video ready state
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const checkVideoReady = () => {
        if (video.readyState >= 3) {
          setIsLoading(false)
          setVideoError(false)
        }
      }

      checkVideoReady()
      const interval = setInterval(checkVideoReady, 500)

      return () => clearInterval(interval)
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {
          setVideoError(true)
        })
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
      setIsLoading(false)
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsLoading(false)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
    setVideoError(false)
  }

  const handleVideoLoad = () => {
    setIsLoading(false)
    setVideoError(false)
  }

  const handleVideoStart = () => {
    setIsLoading(false)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && !videoError) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen()
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen()
        } else if ((containerRef.current as any).mozRequestFullScreen) {
          await (containerRef.current as any).mozRequestFullScreen()
        } else if ((containerRef.current as any).msRequestFullscreen) {
          await (containerRef.current as any).msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen()
        } else if ((document as any).mozCancelFullScreen) {
          await (document as any).mozCancelFullScreen()
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen()
        }
      }
    } catch (error) {
      console.error("Fullscreen error:", error)
    }
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient-animated absolute inset-0" />
      </div>

      {/* Toggle Section */}
      <div className="relative z-10 pt-32 pb-8">
        <div className="container-max section-padding">
          <div className="flex justify-center">
            <div
              className={`glass-toggle transform transition-all duration-700 ease-out ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center relative">
                <button
                  onClick={() => handleToggleChange("commercial")}
                  className={`px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: activeToggle === "commercial" ? "#191A39" : "transparent",
                    color: activeToggle === "commercial" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: activeToggle === "commercial" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Commercial
                </button>
                <button
                  onClick={() => handleToggleChange("platforms")}
                  className={`px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out hover:scale-105`}
                  style={{
                    borderRadius: "20px",
                    backgroundColor: activeToggle === "platforms" ? "#191A39" : "transparent",
                    color: activeToggle === "platforms" ? "white" : "rgba(0, 0, 0, 0.8)",
                    boxShadow: activeToggle === "platforms" ? "0 4px 20px rgba(25, 26, 57, 0.3)" : "none",
                  }}
                >
                  Platforms
                </button>

                <div
                  className="absolute top-1 bottom-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl transition-all duration-500 ease-out opacity-10"
                  style={{
                    left: activeToggle === "commercial" ? "4px" : "50%",
                    width: "calc(50% - 8px)",
                  }}
                />
              </div>
            </div>
          </div>
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
                RedGiraffe Global
              </h1>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white transition-all duration-1000 ease-out leading-tight ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: "300ms",
                }}
              >
                Commercial Card
              </h2>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-2xl leading-relaxed transition-all duration-1000 ease-out px-2 sm:px-0 ${
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

            {/* Hero Video - Fully Responsive */}
            <div
              className={`relative mt-8 sm:mt-12 w-full transition-all duration-1200 ease-out ${
                inView ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: "600ms",
              }}
            >
              <div 
                className="w-full mx-auto" 
                style={{ 
                  maxWidth: window?.innerWidth > 1536 ? '150rem' : 
                            window?.innerWidth > 1280 ? '120rem' : 
                            window?.innerWidth > 1024 ? '100rem' : 
                            window?.innerWidth > 768 ? '90vw' : 
                            'calc(100vw - 2rem)'
                }}
              >
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
                      }}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onError={handleVideoError}
                      onWaiting={() => setIsLoading(true)}
                      crossOrigin="anonymous"
                      preload="metadata"
                      loop
                      muted={isMuted}
                      autoPlay
                      playsInline
                    />

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Top Controls */}
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center gap-2">
                        <button
                          onClick={toggleFullscreen}
                          className="w-8 sm:w-10 h-8 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                        >
                          {isFullscreen ? (
                            <Minimize className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          ) : (
                            <Maximize className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          )}
                        </button>
                      </div>

                      {/* Center Play/Pause Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={togglePlayPause} 
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
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                        {/* Progress Bar */}
                        <div
                          className="w-full h-1.5 sm:h-2 bg-white/20 rounded-full cursor-pointer mb-2 sm:mb-3 group/progress"
                          onClick={handleSeek}
                        >
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-150 group-hover/progress:bg-primary-400"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                          />
                        </div>

                        {/* Control Bar */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <button 
                              onClick={togglePlayPause} 
                              className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                            >
                              {isPlaying ? (
                                <Pause className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                              ) : (
                                <Play className="w-3 sm:w-4 h-3 sm:h-4 text-white ml-0.5" />
                              )}
                            </button>

                            <button 
                              onClick={toggleMute} 
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
                            RedGiraffe Commercial Card
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl sm:rounded-2xl">
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-sm sm:text-base">Loading video...</span>
                        </div>
                      </div>
                    )}

                    {/* Error State */}
                    {videoError && (
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
                    )}
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