import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

// SVG 기반 OG 이미지 생성 (1200x630)
const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#ea580c"/>
    </linearGradient>
    <linearGradient id="card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.2)"/>
      <stop offset="100%" style="stop-color:rgba(255,255,255,0.05)"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 장식 원 -->
  <circle cx="100" cy="80" r="200" fill="rgba(255,255,255,0.05)"/>
  <circle cx="1100" cy="550" r="250" fill="rgba(255,255,255,0.05)"/>

  <!-- 카드 배경 -->
  <rect x="200" y="120" width="800" height="380" rx="32" fill="url(#card)"/>

  <!-- 아이콘 -->
  <text x="600" y="230" text-anchor="middle" font-size="80" fill="white">🚗</text>

  <!-- 제목 -->
  <text x="600" y="310" text-anchor="middle" font-family="sans-serif" font-size="56" font-weight="800" fill="white">자동차 계산기</text>

  <!-- 설명 -->
  <text x="600" y="370" text-anchor="middle" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.9)">자동차세 · 취등록세 · 할부금 · 유류비 · 감가상각</text>

  <!-- 연도 -->
  <text x="600" y="420" text-anchor="middle" font-family="sans-serif" font-size="18" fill="rgba(255,255,255,0.65)">2026년 최신 법령 기준</text>

  <!-- 하단 URL -->
  <text x="600" y="590" text-anchor="middle" font-family="sans-serif" font-size="18" fill="rgba(255,255,255,0.5)">car.mustarddata.com</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath);

console.log(`OG image generated: ${outputPath}`);
