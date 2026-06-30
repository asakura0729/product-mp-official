const minMajor = 22;
const minMinor = 12;
const [major, minor] = process.versions.node.split('.').map(Number);

if (major < minMajor || (major === minMajor && minor < minMinor)) {
	console.error(`
Node.js ${process.version} is not supported (Astro 6 requires >= ${minMajor}.${minMinor}.0).

Fix:
  cd ~/product-mp
  nvm use
  npm run dev:web

Or set Node 22 as default:
  nvm alias default 22
`);
	process.exit(1);
}
