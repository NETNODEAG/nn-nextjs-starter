import { DrupalParagraph } from 'next-drupal';

export interface ParagraphTextProps {
  paragraph: DrupalParagraph;
}

export default function ParagraphText({ paragraph }: ParagraphTextProps) {
  const text = paragraph.field_text;

  return (
    <section data-paragraph-type="Text">
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: text?.processed,
        }}
      />
    </section>
  );
}
