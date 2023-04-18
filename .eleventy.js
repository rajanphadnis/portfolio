module.exports = function(eleventyConfig) {
  // Copy `src/404.html` to `public/404.html`
  eleventyConfig.addPassthroughCopy("src/404.html");
  eleventyConfig.addPassthroughCopy("src/compressible-calculator/index.html");
  // Copy `src/resources/` to `public/resources/`
  eleventyConfig.addPassthroughCopy("src/resources");
    return {
      dir: {
        input: "src",
        includes: "includes",
        layouts: "layouts",
        output: "public"
      }
    }
  };