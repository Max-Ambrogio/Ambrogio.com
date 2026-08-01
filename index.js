import { v2 as cloudinary } from 'cloudinary';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error(
    'Missing Cloudinary environment variables. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET before running this script.'
  );
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

export const getAllCloudinaryImages = async () => {
  const imageUrls = [];
  let nextCursor = null;

  do {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      next_cursor: nextCursor,
    });

    const resources = Array.isArray(result.resources) ? result.resources : [];

    resources.forEach((resource) => {
      if (resource?.resource_type !== 'image') {
        return;
      }

      if (resource?.secure_url || resource?.url) {
        imageUrls.push(resource.secure_url || resource.url);
      }
    });

    nextCursor = result.next_cursor ?? null;
  } while (nextCursor);

  return imageUrls;
};

export const cloudinaryImages = await getAllCloudinaryImages();

console.log('Cloudinary image array:', cloudinaryImages);
console.log(`Found ${cloudinaryImages.length} image(s) in the Cloudinary library.`);