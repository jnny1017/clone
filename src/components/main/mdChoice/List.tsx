import { useSelector } from 'react-redux'

import { useAppSelector } from 'store'
import { Slider } from 'components/slider'
import { Product } from 'pages/main/models';

interface Props {
  data: Product[];
}

export function List({ data }: Props) {
  const filteredList = useAppSelector((state) => {
    const { code } = state.main;

    return data.filter(item => item.code === code);
  });

  return (
    <Slider data={filteredList} />
  )
}
