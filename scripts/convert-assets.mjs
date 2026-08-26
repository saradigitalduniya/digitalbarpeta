import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convertAssets() {
  const logoSvgPath = path.resolve('public/logo/digital_barpeta_logo.svg');
  const logoPngPath = path.resolve('public/logo/digital_barpeta_logo.png');

  const charSvgPath = path.resolve('public/character/digital_barpeta_character.svg');
  const charPngPath = path.resolve('public/character/digital_barpeta_character.png');

  console.log('Rendering high-res PNG for logo...');
  const logoSvg = fs.readFileSync(logoSvgPath);
  await sharp(logoSvg, { density: 300 })
    .png({ quality: 100 })
    .toFile(logoPngPath);
  console.log('✓ Logo PNG created successfully:', logoPngPath);

  console.log('Rendering high-res PNG for character...');
  const charSvg = fs.readFileSync(charSvgPath);
  await sharp(charSvg, { density: 300 })
    .png({ quality: 100 })
    .toFile(charPngPath);
  console.log('✓ Character PNG created successfully:', charPngPath);
}

convertAssets().catch((err) => {
  console.error('Error converting assets:', err);
  process.exit(1);
});
