import { useSelector } from 'react-redux'

import { RootState } from 'store'
import { Slider } from 'components/slider'
import { mdChoicesProductsData } from 'pages/main/data';

export function MdChoiceList() {
  const data = mdChoicesProductsData;

  const filteredList = useSelector((state: RootState) => {
    const { code } = state.main;

    return data.filter(item => item.code === code);
  });

  return (
    <Slider data={filteredList} />
  )
}
