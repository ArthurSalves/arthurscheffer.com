export default async function sitemap() {

  const routes = ["", "/posts", "/experiences"].map((route) => ({
    url: `https://emiliosheinz.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}