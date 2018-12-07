export default () => {
  // Load images using importAll method.
  // fetches all JP(E)G images in the assets folder
  const images = importAll(require.context("../assets", false, /\.(jpe?g)$/));

  // Picks a random number based on the amount of available images
  const randomNumber = Math.floor(Math.random() * images.length);

  // Returns the image corresponding to the randomly generated number
  return images[randomNumber];
};

// Imports all the images and returns a reference to the imports
const importAll = require => require.keys().map(key => require(key));
