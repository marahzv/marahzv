
/* Functions for image handling */

function generateImageUrlSingle (image) {
  return require(`@/assets/heros/${image}`)
}

function generateImageUrls (images) {
  var items = []
  for (var i = 0; i < images.length; i++) {
    items.push({
      src: generateImageUrlSingle(images[i])
    })
  }
  return items
}

export default {
  generateImageUrlSingle,
  generateImageUrls
}
