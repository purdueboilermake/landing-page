/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     */
    output: "export",
    distDir: "docs",
    /**
     * Disable server-based image optimization. Next.js does not support
     * dynamic features with static exports.
     *
     * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
     */
    images: {
      unoptimized: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/2025',
          permanent: true, // Use a 308 permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;