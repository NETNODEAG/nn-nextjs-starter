import { DrupalParagraph } from 'next-drupal';

import { paragraphTypes } from './paragraphs';

interface ParagraphProps {
  paragraph: DrupalParagraph;
}
export default function Paragraph({ paragraph }: ParagraphProps) {
  const ParagraphInstance = paragraphTypes[paragraph.type];

  return ParagraphInstance ? <ParagraphInstance paragraph={paragraph} /> : null;
}
