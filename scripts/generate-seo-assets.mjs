import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateSeoAssets() {
  console.log('Generating SEO icons and assets...');
  
  const logoPngPath = path.resolve('public/logo/digital_barpeta_logo.png');
  const publicDir = path.resolve('public');

  if (!fs.existsSync(logoPngPath)) {
    console.error('Logo source image not found at:', logoPngPath);
    return;
  }

  // 1. Favicon 16x16
  await sharp(logoPngPath)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png created');

  // 2. Favicon 32x32
  await sharp(logoPngPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png created');

  // 3. Favicon.ico (using 32x32 PNG)
  fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));
  console.log('✓ favicon.ico created');

  // 4. Apple Touch Icon 180x180 (with dark background padding for crisp display)
  await sharp(logoPngPath)
    .resize(180, 180, { fit: 'contain', background: { r: 5, g: 5, b: 5, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png created');

  // 5. Android Chrome 192x192
  await sharp(logoPngPath)
    .resize(192, 192, { fit: 'contain', background: { r: 5, g: 5, b: 5, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('✓ android-chrome-192x192.png created');

  // 6. Android Chrome 512x512
  await sharp(logoPngPath)
    .resize(512, 512, { fit: 'contain', background: { r: 5, g: 5, b: 5, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ android-chrome-512x512.png created');

  // 7. OpenGraph Image 1200x630
  // Composite logo on cyber dark gradient canvas
  const svgOverlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10B981" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#050505" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="50%" stop-color="#10B981"/>
          <stop offset="100%" stop-color="#38BDF8"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="#050505"/>
      <circle cx="600" cy="315" r="400" fill="url(#grad)" filter="blur(60px)"/>
      <text x="600" y="440" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="52" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">DIGITAL BARPETA</text>
      <text x="600" y="490" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="22" fill="#10B981" text-anchor="middle" letter-spacing="6">BUILD • GROW • DOMINATE</text>
      <text x="600" y="540" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="18" fill="#9CA3AF" text-anchor="middle">Digital Marketing &amp; Technology Agency • Barpeta, Assam</text>
    </svg>
  `);

  const logoResized = await sharp(logoPngPath)
    .resize(220, 220, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(svgOverlay)
    .composite([
      {
        input: logoResized,
        top: 130,
        left: 490,
      },
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('✓ og-image.png (1200x630) created');

  // 8. site.webmanifest
  const manifest = {
    name: 'Digital Barpeta',
    short_name: 'Digital Barpeta',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    theme_color: '#050505',
    background_color: '#050505',
    display: 'standalone',
    start_url: '/',
  };

  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✓ site.webmanifest created');

  console.log('All SEO assets successfully generated!');
}

generateSeoAssets().catch((err) => {
  console.error('Error generating SEO assets:', err);
  process.exit(1);
});
