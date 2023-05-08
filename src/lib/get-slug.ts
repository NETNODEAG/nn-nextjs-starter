/**
 * The API URL
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/router/translate-path?path=`;

/**
 * Get a single resource (entity) by slug
 *
 * @return {Promise} Promise object represents a single resource
 */
export async function getResourceBySlug(slug: Array<string>) {
  // Build the JSON API URL based on the slug array
  const jsonApiUrl = `${API_URL}/${slug.join('/')}/?format=json_api`;

  try {
    // Fetch the data from the API URL
    const response = await fetch(jsonApiUrl.toString());
    const resource = await response.json();

    // Check if the resource was resolved or not
    if (!resource.resolved) {
      return null;
    }

    // If the resource was resolved, return the data
    return resource;
  } catch (error) {
    throw new Error(
      `Error fetching resource with slug ${slug.join('/')}: ${error}`
    );
  }
}
