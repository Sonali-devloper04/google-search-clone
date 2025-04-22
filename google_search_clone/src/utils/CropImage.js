export default function getCroppedImg(imageBase64, crop) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = `data:image/jpeg;base64,${imageBase64}`;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      const scaleX = image.width / canvas.width;
      const scaleY = image.height / canvas.height;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        canvas.width,
        canvas.height
      );

      resolve(canvas.toDataURL('image/jpeg'));
    };
  });
}
