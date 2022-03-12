import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { Slider } from 'components/slider'
import { Product } from 'pages/main/models';

interface Props {
  data: Product[];
}

export function List({ data }: Props) {
  const filteredList = useSelector((state: RootState) => {
    const { code } = state.main;

    return data.filter(item => item.code === code);
  });

  return (
    <Slider data={filteredList} />
  )
}
