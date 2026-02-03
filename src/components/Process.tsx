import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { useState } from "react";
import agencyVideo from "@/assets/lead.mp4";

const Work = () => {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

useEffect(() => {
  setIsPlaying(false); // Start paused initially

  const timer = setTimeout(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  }, 3000); // 3-second delay

  return () => clearTimeout(timer); // Cleanup if component unmounts early
}, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const video = videoRef.current;
    if (!progressBar || !video) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  const handleProgressDrag = (e) => {
    if (!isDragging) return;
    handleProgressClick(e);
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onMouseMove={() => setShowControls(true)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={agencyVideo}
        className="w-full h-full object-contain"
        loop
        playsInline
        muted={isMuted}
        onClick={togglePlayPause}
      />

      {/* Controls Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Back Button - Top Left */}
        <Link
          to="/"
          className="pointer-events-auto absolute top-4 left-4 md:top-8 md:left-8 inline-flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>

        {/* Mute/Unmute Button - Top Right */}
        <button
          onClick={toggleMute}
          className="pointer-events-auto absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm z-10"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Bottom Controls Section */}
        <div className="pointer-events-auto absolute bottom-0 left-0 right-0 z-10">
          {/* Progress Bar */}
          <div className="px-8 pb-2">
            <div 
              ref={progressBarRef}
              className="relative w-full h-1 bg-white/30 rounded-full cursor-pointer hover:h-2 transition-all group"
              onClick={handleProgressClick}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseMove={handleProgressDrag}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* Progress */}
              <div 
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
              />
              {/* Scrubber */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${(currentTime / duration) * 100 || 0}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between px-8 pb-8">
            {/* Left: Time Display */}
            <div className="text-white text-sm md:text-base font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Center: Playback Controls */}
            <div className="flex items-center gap-4">
              {/* Skip Backward */}
              <button
                onClick={skipBackward}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                aria-label="Skip backward 10 seconds"
              >
                <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Play/Pause */}
              <button
                onClick={togglePlayPause}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 md:w-6 md:h-6" />
                ) : (
                  <Play className="w-5 h-5 md:w-6 md:h-6 ml-1" />
                )}
              </button>

              {/* Skip Forward */}
              <button
                onClick={skipForward}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                aria-label="Skip forward 10 seconds"
              >
                <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Right: Video Title */}
            <div className="text-white">
              <h1 className="text-sm md:text-base lg:text-lg font-bold drop-shadow-lg">
                V Agency
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;