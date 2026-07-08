import React, { useState, useEffect, useRef } from 'react';
import StarBorder from './StarBorder.jsx';
import './StarBorder.css';
import { PRODUCTS, findProductBySlug } from './productsData.js';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [playFailed, setPlayFailed] = useState(false);
  const [isIntroMuted, setIsIntroMuted] = useState(false);
  const videoRef = useRef(null);
  const loVideoRef = useRef(null);
  const [loPlayFailed, setLoPlayFailed] = useState(false);
  
  // Simple routing: get product from URL path
  const pathname = window.location.pathname.split('/').pop() || '';
  const product = findProductBySlug(pathname);

  useEffect(() => {
    document.title = product.brand;
  }, [product]);

  useEffect(() => {
    if (showIntro && videoRef.current) {
      // Try to play with sound first
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay with sound was prevented by browser, playing muted:", error);
          // Fall back to muted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsIntroMuted(true);
            setPlayFailed(true);
            videoRef.current.play().catch(err => {
              console.log("Muted autoplay also failed:", err);
            });
          }
        });
      }
    }
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro && loVideoRef.current) {
      // The user has interacted with the page (skipped or watched intro),
      // so we can play the video with sound!
      loVideoRef.current.muted = false;
      const playPromise = loVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("lo.mp4 autoplay with sound was prevented, playing muted:", error);
          // Fall back to muted play if somehow blocked
          if (loVideoRef.current) {
            loVideoRef.current.muted = true;
            setLoPlayFailed(true);
            loVideoRef.current.play().catch(err => {
              console.log("lo.mp4 muted autoplay also failed:", err);
            });
          }
        });
      }
    }
  }, [showIntro]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Intro overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="max-h-screen w-auto"
            src="/intro take 4.mp4"
            autoPlay
            playsInline
            preload="auto"
            poster="/new.jpeg"
            muted={isIntroMuted}
            controls
            onEnded={() => setShowIntro(false)}
          />
          {playFailed && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer" onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = false;
                setIsIntroMuted(false);
                videoRef.current.play().catch(e => console.log("Failed to play after click:", e));
                setPlayFailed(false);
              }
            }}>
               <button className="px-8 py-4 bg-white/20 border border-white/40 text-white hover:bg-white/30 font-bold rounded-xl text-xl shadow-2xl transition-all hover:scale-105">
                 🔊 Tap for Sound
               </button>
            </div>
          )}
          <button
            className="absolute top-4 right-4 px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white/20 z-20"
            onClick={() => setShowIntro(false)}
          >
            Skip
          </button>
        </div>
      )}

      <img className="fixed inset-0 -z-30 w-full h-full object-cover" src="/try1.png" alt="Background" loading="eager" fetchPriority="high" decoding="async" />

      {/* top spacer */}
      <div className="h-4 sm:h-6" />

      {/* Header box with logo video */}
      <header className="pt-0 sm:pt-0 mt-6 sm:mt-8 pb-6 text-center select-none">
        <div 
          className="mx-auto w-[320px] sm:w-[500px] max-w-[92vw] h-[200px] sm:h-[260px] rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative cursor-pointer"
          onClick={() => {
            if (loVideoRef.current) {
              if (loVideoRef.current.muted) {
                loVideoRef.current.muted = false;
                setLoPlayFailed(false);
                loVideoRef.current.play().catch(e => console.log(e));
              } else {
                loVideoRef.current.muted = true;
                setLoPlayFailed(true);
              }
            }
          }}
        >
          <video 
            ref={loVideoRef}
            src="/lo.mp4" 
            className="w-full h-full object-cover rounded-2xl bg-white/8 backdrop-blur-md ring-1 ring-white/20 shadow-inner" 
            loop 
            playsInline 
          />
          {loPlayFailed && (
            <div className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 backdrop-blur-sm z-10 transition-colors">
              🔊 Tap for Sound
            </div>
          )}
        </div>
        <div className="mt-2 text-xs sm:text-sm text-white font-semibold tracking-wide">Bio‑Stimulant Registration Details</div>
      </header>

      {/* Main panel */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Product Name FIRST */}
        <section className="mx-auto max-w-3xl mt-6">
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="relative rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md p-4 sm:p-6 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e8d8a6]/20 text-[#e8d8a6] mr-4 shadow-inner">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-xs sm:text-sm">Product Name:</div>
                <div className="text-white text-xl sm:text-2xl font-semibold tracking-wide">{product.displayName || product.brand}</div>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Gazette Notification SECOND */}
        {product.gazette && (
          <section className="mt-6">
            <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                  <span className="text-lg">📰</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#d9c98f] text-sm">Gazette Notification:</div>
                  <div className="text-white text-base sm:text-lg">{product.gazette}</div>
                </div>
              </div>
            </StarBorder>
          </section>
        )}

        {/* Title of Bio Stimulant THIRD */}
        <section className="mt-6">
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">⚗️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Title of Bio Stimulant:</div>
                <div className="text-white text-base sm:text-lg">{product.specification}</div>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Category of Fertilizers FOURTH */}
        {product.category && (
          <section className="mt-6">
            <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                  <span className="text-lg">🏷️</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#d9c98f] text-sm">Category of Fertilizers:</div>
                  <div className="text-white text-base sm:text-lg">{product.category}</div>
                </div>
              </div>
            </StarBorder>
          </section>
        )}

        {/* Info grid with StarBorder */}
        <section className="mt-8 grid grid-cols-1 gap-4">
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🧪</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Composition</div>
                {(product.composition || []).length ? (
                  <ul className="mt-1 text-sm sm:text-base text-white list-none pl-0 space-y-1">
                    {(product.composition || []).map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-1 text-sm sm:text-base text-white"></div>
                )}
              </div>
            </div>
          </StarBorder>


          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🌶️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Crops:</div>
                <div className="text-base sm:text-lg">{(product.crops || []).join(', ')}</div>
              </div>
            </div>
          </StarBorder>

          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🧴</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Dosage:</div>
                <div className="text-base sm:text-lg">{(product.dosage || []).join(' | ')}</div>
              </div>
            </div>
          </StarBorder>
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🏭</span>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-[#d9c98f] text-sm">Manufactured By:</div>
                  <div className="text-white/90 text-sm sm:text-base font-semibold mt-1">DR Bawasakar Technology (Agro) Private Limited,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">S.No.36/1B/1/2/3,Pune Solapur Road,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">Manjari,Manjari BK.,Haveli Taluka,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">Pune District,Maharashtra-412307</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-1">Phone No.: 9637493575</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">E-mail: info@drbawasakar.com</div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-[#d9c98f] text-sm">Marketed By:</div>
                  <div className="text-white/90 text-sm sm:text-base font-semibold mt-1">DR Bawasakar Technology (Agro) Private Limited,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">1245/2A/4,Plot No.16,Ground Floor,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">Satyapramod Nagar,Lotus Colony,</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">Athani,Belagavi District,Karnataka-591304</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-1">Phone No.: 9637493575</div>
                  <div className="text-white/90 text-xs sm:text-sm mt-0.5">E-mail: info@drbawasakar.com</div>
                </div>
              </div>
            </div>
          </StarBorder>
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">📞</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Customer Care</div>
                <div className="text-white/90 text-sm sm:text-base">+91 9325006298</div>
              </div>
            </div>
          </StarBorder>
        </section>
      </main>
    </div>
  );
}
