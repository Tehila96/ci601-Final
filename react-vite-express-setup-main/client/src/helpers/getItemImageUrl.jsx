import { Buffer } from "buffer";

function getItemImageUrl(image) {
    if (image != null && image.data.length !== 0) {
        const base64String = `data:image/png;base64,${Buffer.from(image).toString('base64')}`;
        return base64String;
    }
    return "/images/no-image.jpg";

}
export default getItemImageUrl;