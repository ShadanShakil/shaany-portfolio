/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'localhost'], // Adding typical domains just in case, but removing unoptimized: true
    }
};

export default nextConfig;
