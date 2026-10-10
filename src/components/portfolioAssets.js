const imageContext = require.context('../images', true, /\.(?:avif|gif|jpe?g|png|webp|pdf)$/i);

export const media = imageContext.keys().map((path) => {
  const fileName = path.split('/').pop();

  return {
    path,
    src: imageContext(path),
    folder: path.split('/')[1],
    fileName,
    isPdf: /\.pdf$/i.test(fileName),
  };
});
