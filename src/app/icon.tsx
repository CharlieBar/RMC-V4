import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A1628',
          borderRadius: '4px',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.5px',
            lineHeight: 1,
          }}
        >
          RMC
        </span>
      </div>
    ),
    { ...size }
  );
}
