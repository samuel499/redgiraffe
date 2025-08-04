"use client"

import { ArrowRight } from "lucide-react"

export default function RequestDemoButton() {
  return (
    <button className="glass-button group">
      <span className="text-base font-semibold text-gray-900 mr-3">Request Demo</span>
      <div className="btn-icon-circle">
        <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </button>
  )
}
