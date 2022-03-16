import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/store';
import { fetchRandomCollectionData } from 'store/main/main.thunks';
import { RandomCollectionDataRes } from 'store/main/main.model';

import Slider from '../../../../components/Slider';
import Section from '../../../../components/Section';

interface Props {
  data: RandomCollectionDataRes;
}

export default function RandomCollection() {
  const dispatch = useDispatch();

  const { randomCollectionData, randomCollectionData2 } = useAppSelector(
    state => state.main
  );

  useEffect(() => {
    dispatch(fetchRandomCollectionData());
  }, [dispatch]);

  return (
    <>
      <CollectionSection data={randomCollectionData} />
      <CollectionSection data={randomCollectionData2} />
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
