import { RandomCollectionDataRes } from '../../../../store/main/main.model';

import Slider from '../../../../components/Slider';
import Section from '../../../../components/Section';

interface Props {
  data: RandomCollectionDataRes;
}

export default function RandomCollectionSection({ data }: Props) {
  return (
    <>
      <Section title={data.title} subtitle={data.subtitle}>
        <Slider data={data.data.products} />
      </Section>
    </>
  );
}
