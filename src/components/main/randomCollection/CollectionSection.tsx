import MainSection from 'components/main/section'
import { Slider } from 'components/slider';
import { randomCollectionData, randomCollectionData2 } from 'pages/main/data';
import { SectionModel } from '../section/models';

interface Props {
  data: SectionModel
}

export function CollectionSectionContainer() {
  return (
    <>
      <CollectionSection data={randomCollectionData} />
    </>
  )
}

function CollectionSection({ data }: Props) {
  return (
    <>
      <MainSection
        title={data.title}
        subtitle={data.subtitle}
      >
        <Slider data={data.data.products} />
      </MainSection>
    </>
  )
}

