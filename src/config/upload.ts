import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const directoryDestination = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: directoryDestination,
  storage: multer.diskStorage({
    destination: directoryDestination,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
