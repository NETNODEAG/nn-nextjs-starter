import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { getResourceBySlug } from '@/lib/get-slug';
import { getSinglePageNode } from '@/lib/jsonapi/node/get-page';
import { absoluteUrl } from '@/lib/utils';
import NodePage from '@/components/node/node-page/NodePage';

const RESOURCE_TYPES = ['node--page'];

interface NodeProps {
  params: { slug: Array<string> };
}

async function getResource(slug: Array<string>) {
  let entity;
  const nodeRequest = await getResourceBySlug(slug);

  // If the resource type is not in the list of allowed resource types.
  if (!RESOURCE_TYPES.includes(nodeRequest?.jsonapi?.resourceName)) {
    notFound();
  }

  if (nodeRequest?.jsonapi?.resourceName === 'node--page') {
    entity = await getSinglePageNode(nodeRequest.entity.id);
  }

  // If we don't receive an entity, it means the resource doesn't exist.
  // We use the notFound() function to redirect to the 404 page.
  if (!nodeRequest || !entity) {
    notFound();
  }

  return entity;
}

export async function generateMetadata({
  params,
}: NodeProps): Promise<Metadata> {
  const { slug } = params;
  const entity = await getResource(slug);

  const leadText = entity?.field_lead_text;
  const mainImage = entity?.field_main_image?.field_media_image?.uri?.url;

  // Dynamic metadata.
  let seoTitle = entity?.title;
  let seoDescription = leadText || siteConfig.description;
  let seoImage = mainImage ? absoluteUrl(mainImage) : siteConfig.ogImage;

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      siteName: siteConfig.name,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Node({ params }: NodeProps) {
  const { slug } = params;

  // If we don't receive a slug, it means the resource doesn't exist.
  // We use the notFound() function to redirect to the 404 page.
  if (!slug) {
    notFound();
  }

  // We use the getResource() function to get the resource by its slug.
  const entity = await getResource(slug);

  return <>{entity?.type === 'node--page' && <NodePage node={entity} />}</>;
}
