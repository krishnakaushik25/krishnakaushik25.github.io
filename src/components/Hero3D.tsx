import { Suspense, lazy } from 'react';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

interface Hero3DProps {
  sceneUrl?: string;
}

export default function Hero3D({ sceneUrl }: Hero3DProps) {
  // Default to a placeholder if no Spline scene is provided
  // Users can create their own scene at spline.design and provide the URL
  const defaultScene = sceneUrl || 'https://prod.spline.design/placeholder';

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
      {/* Gradient fallback while loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" />

      {/* 3D Scene */}
      <Suspense fallback={<Hero3DFallback />}>
        {sceneUrl ? (
          <Spline scene={sceneUrl} className="w-full h-full" />
        ) : (
          <Hero3DFallback />
        )}
      </Suspense>

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

// Fallback component with animated gradient mesh
function Hero3DFallback() {
  return (
    <div className="relative w-full h-full bg-[#111] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <p className="text-zinc-500 text-sm">3D Scene Coming Soon</p>
          <p className="text-zinc-600 text-xs mt-1">Add your Spline scene URL</p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(30px, 10px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
