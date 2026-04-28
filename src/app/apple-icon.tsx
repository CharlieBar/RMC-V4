import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '22px',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontSize: '60px',
            fontWeight: 700,
            letterSpacing: '2px',
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
