/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Azure Static Web Apps
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Generate trailing slashes for better static routing
  trailingSlash: true,
}

export default nextConfig
