import Slider from '../../../../components/Slider';
import { randomCollectionData } from '../../data/randomCollection.data';

// TODO: SectionModel
import { SectionModel } from '../section/models';

import Section from '../../../../components/Section';
import { ProductInfo } from 'components/model/product.model';

interface Props {
  data: ProductInfo;
}

export default function RandomCollection() {
  return (
    <>
      <CollectionSection data={randomCollectionData} />
    </>
  );
}

function CollectionSection({ data }: Props) {
  return (
    <>
      <Section title={data.title} subtitle={data.subtitle}>
        <Slider data={data.data.products} />
      </Section>
    </>
  );
}
