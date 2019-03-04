
/* Functions for image handling */

function generateImageUrlSingle (image, baseFolder) {
  return require(`@/assets/${baseFolder}/${image}`)
}

function generateImageUrls (images, baseFolder) {
  var items = []
  for (var i = 0; i < images.length; i++) {
    items.push({
      name: generateImageUrlSingle(images[i].name, baseFolder),
      id: `image_${i}`,
      src: images[i].name
    })
  }
  return items
}

export default {
  generateImageUrlSingle,
  generateImageUrls
}
