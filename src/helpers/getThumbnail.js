const getThumbnail = (path, extension) => {
  const httpsPath = path.replace(/^http:/, 'https:');
  return `${httpsPath}.${extension}`;
};

export default getThumbnail;