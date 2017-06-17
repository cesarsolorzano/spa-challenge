import getThumbnail from './getThumbnail';

import imageNotAvailable from '../img/image_not_available.jpg';

const getImage = (images) => {
    const image = (images && images.length > 0) ? images[0]  : null;
    const thumbnail = image ? getThumbnail(image.path, image.extension) : imageNotAvailable;

    return thumbnail;
};

export default getImage;