CurtainTrack.company static website - upload-ready package

Upload the CONTENTS of this folder to your static web host's public/root directory.

Included:
- index.html: styled blue/white/black homepage
- blog/index.html: searchable blog archive
- posts/: 216 standalone blog post HTML pages
- assets/: shared CSS and JavaScript
- sitemap.xml and robots.txt
- conversion-manifest.json

Recommended host options:
- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Any cPanel/static host

After upload, test:
- /
- /blog/
- /posts/install-ceiling-curtain-tracks-like-a-pro-diy-guide/


Homepage update: includes hero image at assets/images/hero-curtaintrack.jpg and updated hero layout in index.html.


Clean URL update:
- Blog posts now live at /posts/post-slug/ using /posts/post-slug/index.html.
- Internal links, homepage links, blog archive links, and sitemap URLs were updated to remove .html from post URLs.
- vercel.json includes cleanUrls and trailingSlash settings for Vercel hosting.
