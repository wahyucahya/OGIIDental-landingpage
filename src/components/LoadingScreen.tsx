import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#ffffff',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem'
    }}>
      {/* Animated Logo Container */}
      <div style={{
        position: 'relative',
        width: '120px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Soft Pulse Ring */}
        <div style={{
          position: 'absolute',
          inset: '-15px',
          borderRadius: '50%',
          border: '2px dashed var(--color-teal)',
          animation: 'spin 8s linear infinite',
          opacity: 0.4
        }} />

        {/* Floating Animated Logo2 */}
        <img
          src="/logo2.svg"
          alt="OGII DENTAL Loading..."
          style={{
            width: '90px',
            height: '90px',
            objectFit: 'contain',
            animation: 'pulseScale 1.8s ease-in-out infinite'
          }}
        />
      </div>

      {/* Brand & Loading Indicator */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          color: 'var(--color-dark-gray)',
          letterSpacing: '-0.02em',
          marginBottom: '0.375rem'
        }}>
          OGII <span style={{ color: 'var(--color-teal)' }}>DENTAL</span>
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-500)', fontWeight: 500 }}>
          Memuat Layanan & Perawatan Gigi...
        </p>
      </div>

      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(44, 122, 123, 0.2));
          }
          50% {
            transform: scale(1.12);
            filter: drop-shadow(0 8px 24px rgba(44, 122, 123, 0.45));
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
