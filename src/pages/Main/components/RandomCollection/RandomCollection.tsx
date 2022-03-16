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
  const dispatch = useDispatch()

  const { randomCollectionData: { randomCollectionDataResponse, randomCollectionData2Response } } = useAppSelector((state) => state.main);

  useEffect(() => {
    dispatch(fetchRandomCollectionData());
  }, [dispatch]);

  console.log(randomCollectionDataResponse);

  return (
    <>
      <CollectionSection data={randomCollectionDataResponse} />
      <CollectionSection data={randomCollectionData2Response} />
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
