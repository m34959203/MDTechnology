'use client'

import { Suspense, lazy, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-full robot-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Анимированное свечение */}
      <div className="robot-glow" />

      {/* Анимированные частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle" style={{ top: '20%', left: '30%' }} />
        <div className="particle" style={{ top: '60%', left: '70%' }} />
        <div className="particle" style={{ top: '40%', left: '50%' }} />
      </div>

      {/* Дополнительное свечение при наведении */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.3), transparent 60%)',
          filter: 'blur(60px)'
        }}
      />

      {/* 3D сцена с эффектом парения */}
      <div className="robot-float w-full h-full shimmer-effect">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
          />
        </Suspense>
      </div>

      {/* Дополнительные декоративные кольца */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-500/20"
          style={{
            animation: 'pulse-glow 3s ease-in-out infinite'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-500/10"
          style={{
            animation: 'pulse-glow 4s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
      </div>
    </div>
  )
}
