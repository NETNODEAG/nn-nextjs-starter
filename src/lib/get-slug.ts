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
  let jsonApiUrl;

  if (slug.length > 1) {
    jsonApiUrl = API_URL + slug.join('/') + '?format=json_api';
  } else {
    jsonApiUrl = API_URL + slug + '?format=json_api';
  }

  const response = await fetch(jsonApiUrl.toString());

  const data = await response.json();

  return data;
}
