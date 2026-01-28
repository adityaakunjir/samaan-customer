/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for Azure Static Web Apps
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
