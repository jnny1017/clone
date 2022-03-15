import { CategoryInfo } from '../CategoryFilter/models/category.model';
import { ProductInfo } from '../model/product.model';
import Section from '../Section';
import CategoryFilter from '../CategoryFilter';
import List from '../List';

interface Props {
  title: string;
  categoryData: CategoryInfo[];
  productData: ProductInfo[];
  onClick: (code: string) => void;
}

// mdChoicesCategoriesData
// handleClickCategory

//mdChoicesProductsData

function PickSection({ title, categoryData, productData, onClick }: Props) {
  return (
    <Section title={title}>
      <CategoryFilter data={categoryData} onClick={onClick} />
      <List data={productData} />
    </Section>
  );
}

export default PickSection;
