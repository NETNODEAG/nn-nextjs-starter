import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

/**
 * The resource type
 *
 * @type {string}
 */
const RESOURCE_TYPE = 'node--page';

/**
 * The API URL
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/node/page`;

/**
 * Get a single page
 * @param {string} id - The page id
 *
 * @return {Promise} Promise object represents a single page
 */
export async function getSinglePageNode(id: string | null) {
  const apiParams = new DrupalJsonApiParams();

  apiParams
    .addFilter('status', '1')
    .addFilter('drupal_internal__nid', id)
    .addInclude(['field_main_image.field_media_image', 'field_paragraphs'])
    .addFields(RESOURCE_TYPE, [
      'title',
      'path',
      'drupal_internal__nid',
      'field_lead_text',
      'field_main_image',
      'field_paragraphs', // Ref. paragraphs
    ])
    .addFields('media--image', ['field_media_image'])
    .addFields('file--file', ['uri', 'resourceIdObjMeta'])
    .getQueryObject();

  const queryString = apiParams.getQueryString();
  const jsonApiUrl = API_URL + '?' + queryString + '&jsonapi_include=1';

  const response = await fetch(jsonApiUrl.toString(), {
    next: { revalidate: 180 },
  });

  const data = await response.json();

  return data.data[0];
}
