export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/sitemap.xml`,
  }
}
