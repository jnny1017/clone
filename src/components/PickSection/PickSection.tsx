import { CategoryInfo } from '../CategoryFilter/models/category.model';
import { ProductInfo } from '../model/product.model';
import Section from '../Section';
import CategoryFilter from '../CategoryFilter';
import { SliderItemModel } from '../Slider/models/sliderItem.model';
import Slider from '../../components/Slider';
import { useAppSelector } from '../../store/store';

interface Props {
  title: string;
  categoryData: CategoryInfo[];
  productData: ProductInfo[];
  onClick: (code: string) => void;
  onClickModal: (slide: SliderItemModel) => void;
}

function PickSection({ title, categoryData, productData, onClick, onClickModal }: Props) {
  const filteredList = useAppSelector(state => {
    const { code } = state.main;

    return productData.filter(item => item.code === code);
  });

  return (
    <Section title={title}>
      <CategoryFilter data={categoryData} onClick={onClick} />
      <Slider data={filteredList} onClickModal={onClickModal} />
    </Section>
  );
}

export default PickSection;
