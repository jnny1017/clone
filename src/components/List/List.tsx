import { useAppSelector } from '../../store/store';
import { ProductInfo } from '../model/product.model';
import Slider from '../Slider';

interface Props {
  data: ProductInfo[];
}

export default function List({ data }: Props) {
  const filteredList = useAppSelector(state => {
    const { code } = state.main;

    return data.filter(item => item.code === code);
  });

  return <Slider data={filteredList} />;
}
