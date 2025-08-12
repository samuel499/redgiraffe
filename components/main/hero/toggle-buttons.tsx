export default function HeroToggle({
  activeToggle,
  onChange,
  inView,
}: {
  activeToggle: "commercial" | "platforms"
  onChange: (value: "commercial" | "platforms") => void
  inView: boolean
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`glass-toggle transform transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex items-center relative">
          <button
            onClick={() => onChange("commercial")}
            className="px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out hover:scale-105"
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
            onClick={() => onChange("platforms")}
            className="px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ease-out hover:scale-105"
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
  )
}
