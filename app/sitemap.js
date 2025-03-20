import { getSitemap } from "../graphql/Components/getSitemap";

export default async function sitemap() {
  const sitemapData = await getSitemap();
  const rootUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const projectUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/projects-and-programs`;
  const blogUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs-and-articles`;
  const impactStoryUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/impact-stories`;

  // Function to clean the slugs for pages only
// Function to clean the slugs for pages only
const cleanSlug = (slug) => {
  return slug
    .replace(/-page$/, '')  // Remove "-page" at the end
    .replace(/-\d+$/, '')  // Remove "-number" at the end
    .replace(/^main-/, '')  // Remove "main-" at the start
    .replace(/^bangladesh-/, 'bangladesh/')  // Replace "bangladesh-" with "bangladesh/"
    .replace(/^kenya-/, 'kenya/') // Replace "kenya-" with "kenya/"
    .replace(/^home/, '') // Replace "home" with ""
    .replace(/^main/, '') // Replace "main" with ""
    .replace(/^leadership-team$/, 'our-leadership')  // Replace "leadership-team" with "our-leadership"
    .replace(/^bangladesh\/leadership-team$/, 'bangladesh/our-leadership')// Handle "bangladesh/leadership-team"
    .replace(/^kenya\/leadership-team$/, 'kenya/our-leadership') // Handle "bangladesh/leadership-team"
    .replace(/^kenya\/main$/, 'kenya'); // Handle "bangladesh/leadership-team"
};


  const pages = sitemapData.pages.edges.map(edge => {
    const cleanedSlug = cleanSlug(edge.node.slug); // Clean the page slug
    const pageUrl = `${rootUrl}/${cleanedSlug}`;
    return {
      url: pageUrl,
      lastModified: new Date(edge.node.modified),
    };
  });

  const projects = sitemapData.projects.edges.map(edge => {
    const projectsURL = `${projectUrl}/${edge.node.slug}`; 
    return {
      url: projectsURL,
      lastModified: new Date(edge.node.modified),
    };
  });

  // Separate blog posts based on categories
  const posts = sitemapData.posts.edges.map(edge => {
    // Check if "Impact Stories" category exists
    const hasImpactStoryCategory = edge.node.categories.edges.some(category =>
      category.node.slug === "impact-stories"
    );

    const postUrl = `${rootUrl}/${edge.node.slug}`;
    const postData = {
      url: postUrl,
      lastModified: new Date(edge.node.modified),
    };

    if (hasImpactStoryCategory) {
      return {
        ...postData,
        url: `${impactStoryUrl}/${edge.node.slug}`,
      };
    } else {
      return {
        ...postData,
        url: `${blogUrl}/${edge.node.slug}`,
      };
    }
  });

  return [
    ...pages,
    ...projects,
    ...posts,
  ];
}
