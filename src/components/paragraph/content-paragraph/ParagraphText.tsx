import { useState } from 'react';
import Link from 'next/link';
import { DrupalParagraph } from 'next-drupal';

interface ParagraphTextProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphText({ paragraph }: ParagraphTextProps) {
  const text = paragraph.text;

  return (
    <section data-paragraph-type="Text">
      <div
        className="prose sm:top-3 md:top-0"
        dangerouslySetInnerHTML={{
          __html: text?.processed,
        }}
      />
    </section>
  );
}
