const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'hawkhacksimages',
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

export const uploadImage = (filePath, destination) => {
    return bucket.upload(filePath, {
        destination,
    });
};

export const getImage = (fileName) => {
    return bucket.file(fileName).getSignedUrl({
        action: 'read',
        expires: '03-09-2491',
    });
}
