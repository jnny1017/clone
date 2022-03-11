import { CategoryFilter, Slider } from './';
import { mdChoicesFixture, mdChoicesProductsFixture } from '../../../pages/main/data';

export function MainSection() {
  return (
    <>
      <CategoryFilter
        category={mdChoicesFixture}
      />
      <Slider
        slides={mdChoicesProductsFixture}
      />
    </>
  )
}
