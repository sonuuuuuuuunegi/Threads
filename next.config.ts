import type { NextConfig } from "next";

const nextConfig:NextConfig={
  typescript:{
    ignoreBuildErrors:true,
  },
  experimental: {
    //serverActions: true, // Enable experimental server actions
    //serverComponentsExternalPackages: ['mongoose'], // Allow Mongoose in server components
    //serverExternalPackages:['mongoose'],
    // turbo: {
    //   enabled: true, // Enable Turbopack
    // },
    serverComponentsExternalPackages:['mongoose'],
    
  },
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname:'img.clerk.com',
        port: '', // Leave empty for default HTTPS
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'images.clerk.dev', // Clerk's image domain
        port: '', // Leave empty for default HTTPS
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'uploadthing.com', // UploadThing's image domain
        port: '',
        pathname: '/**', // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Placehold.co's image domain
        port: '',
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
  
}

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


