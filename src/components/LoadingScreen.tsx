import clsx from 'clsx'
import { useState, useEffect } from 'react'

export default function LoadingScreen({
  isVisible,
}: {
  isVisible: boolean
}) {
  const [progress, setProgress] = useState(0)
  const [terminalLines, setTerminalLines] = useState<string[]>([])

  const bootSequence = [
    'SYSTEM BOOT INITIATED...',
    'LOADING AI CRASH DATABASE...',
    'INDEXING FAILURE REPORTS...',
    'CALIBRATING CRASH LOG...',
    'READY TO DISPLAY CRASHES',
  ]

  useEffect(() => {
    if (!isVisible) return

    setTerminalLines([])
    setProgress(0)

    let lineIndex = 0
    let progressValue = 0

    const interval = setInterval(() => {
      // Add terminal lines
      if (lineIndex < bootSequence.length) {
        const nextLine = bootSequence[lineIndex]
        if (nextLine) {
          setTerminalLines((prev) => [...prev, `> ${nextLine}`])
        }
        lineIndex++
      }

      // Update progress
      progressValue += Math.random() * 25 + 5
      if (progressValue > 100) progressValue = 100
      setProgress(progressValue)

      if (progressValue >= 100 && lineIndex >= bootSequence.length) {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[999] flex items-center justify-center bg-background transition-opacity duration-500 ease-out',
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
      )}
      role="status"
      aria-live="polite"
      aria-hidden={!isVisible}
    >
      <div className="pixel-terminal-frame">
        <div className="pixel-terminal-header">
          <span className="pixel-terminal-title">CRASHEDOUT.EXE</span>
          <div className="pixel-terminal-controls">
            <span className="pixel-control-btn"></span>
            <span className="pixel-control-btn"></span>
            <span className="pixel-control-btn"></span>
          </div>
        </div>
        
        <div className="pixel-terminal-body">
          <div className="pixel-terminal-output">
            {terminalLines.map((line, index) => (
              <div key={index} className="pixel-terminal-line">
                {line}
              </div>
            ))}
            <div className="pixel-terminal-cursor">█</div>
          </div>
          
          <div className="pixel-progress-container">
            <div className="pixel-progress-label">LOADING PROGRESS</div>
            <div className="pixel-progress-bar">
              <div 
                className="pixel-progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="pixel-progress-text">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

