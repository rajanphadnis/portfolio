module.exports = function(eleventyConfig) {
  // Copy `src/images` to `public/images`
  eleventyConfig.addPassthroughCopy("src/images");
  // Copy `src/404.html` to `public/404.html`
  eleventyConfig.addPassthroughCopy("src/404.html");
    return {
      dir: {
        input: "src",
        includes: "includes",
        layouts: "layouts",
        output: "public"
      }
    }
  };