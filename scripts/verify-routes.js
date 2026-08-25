const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const LOCALES = ['en', 'fr', 'ar'];

const ROUTES = [
  '',
  '/services',
  '/services/diagnose',
  '/services/build',
  '/services/convert',
  '/services/automate',
  '/work',
  '/work/yzland',
  '/about',
  '/contact',
  '/audit',
];

function checkRoute(locale, route) {
  const routePath = route === '' ? 'index.html' : `${route}/index.html`;
  const filePath = path.join(OUT_DIR, locale, routePath);
  return fs.existsSync(filePath);
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('❌ Output directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  let passed = 0;
  let failed = 0;

  console.log('\n🔍 Verifying routes...\n');

  for (const locale of LOCALES) {
    console.log(`Locale: ${locale}`);
    for (const route of ROUTES) {
      const exists = checkRoute(locale, route);
      const status = exists ? '✅' : '❌';
      if (exists) passed++; else failed++;
      console.log(`  ${status} /${locale}${route}`);
    }
    console.log('');
  }

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    console.error('\n❌ Some routes are missing!');
    process.exit(1);
  } else {
    console.log('\n✅ All routes verified successfully!');
    process.exit(0);
  }
}

main();