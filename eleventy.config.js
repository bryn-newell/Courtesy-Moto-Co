
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./assets');
  eleventyConfig.addWatchTarget('./styles/');
}
