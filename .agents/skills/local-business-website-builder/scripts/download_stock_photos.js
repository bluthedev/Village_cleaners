/**
 * Helper script to download real, high-resolution stock photography from Unsplash
 * with exact aspect ratios (1920x1080 for hero wallpaper, 1200x800 for service cards).
 * 
 * Usage:
 *   node download_stock_photos.js [targetDir]
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDirectory = process.argv[2] || path.join(process.cwd(), 'public/images');

// Ensure target directory exists
if (!fs.existsSync(targetDirectory)) {
  fs.mkdirSync(targetDirectory, { recursive: true });
}

// Preset photo collections by industry niche
const NICHE_PRESETS = {
  laundry_cleaners: [
    { name: 'hero_1.jpg', url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1920&h=1080&fit=crop&q=85' },
    { name: 'hero_2.jpg', url: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&h=1080&fit=crop&q=85' },
    { name: 'hero_3.jpg', url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&h=1080&fit=crop&q=85' },
    { name: 'dry_cleaning.jpg', url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&h=800&fit=crop&q=85' },
    { name: 'wash_and_fold.jpg', url: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1200&h=800&fit=crop&q=85' },
    { name: 'tailoring.jpg', url: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=1200&h=800&fit=crop&q=85' },
    { name: 'linens.jpg', url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop&q=85' },
    { name: 'laundromat.jpg', url: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?w=1200&h=800&fit=crop&q=85' },
    { name: 'storefront.jpg', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop&q=85' }
  ]
};

function download(item, destFolder) {
  return new Promise((resolve, reject) => {
    const dest = path.join(destFolder, item.name);
    const file = fs.createWriteStream(dest);

    function get(url) {
      https.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch ${item.name}: ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log(`Saved ${item.name}`);
            resolve();
          });
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }

    get(item.url);
  });
}

async function run() {
  const images = NICHE_PRESETS.laundry_cleaners;
  console.log(`Downloading ${images.length} images to ${targetDirectory}...`);
  for (const img of images) {
    await download(img, targetDirectory);
  }
  console.log('All images downloaded successfully with exact aspect ratios!');
}

run().catch(console.error);
