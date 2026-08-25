const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const LOCALES = ['en', 'fr', 'ar'];

function main() {
  console.log('\n📦 Post-build processing...\n');

  for (const locale of LOCALES) {
    const localeDir = path.join(OUT_DIR, locale);
    if (!fs.existsSync(localeDir)) continue;

    const files = fs.readdirSync(localeDir, { recursive: true });

    for (const file of files) {
      if (file.endsWith('.html')) {
        const filePath = path.join(localeDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');

        content = content.replace(
          /<html lang="en"/g,
          `<html lang="${locale}"`
        );

        if (locale === 'ar') {
          content = content.replace(
            /<html lang="ar"/g,
            `<html lang="ar" dir="rtl"`
          );
        }

        fs.writeFileSync(filePath, content);
      }
    }

    console.log(`  ✅ Processed ${locale}/`);
  }

  console.log('\n✅ Post-build processing complete!');
}

main();