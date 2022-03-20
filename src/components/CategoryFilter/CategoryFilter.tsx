import { CategoryInfo } from './models/category.model';
import { useAppSelector } from '../../store/store';
import * as S from '../../styles/mainStyles';

interface Props {
  data: CategoryInfo[];
  onClick: (code: string) => void;
}

export default function CategoryFilter({ data, onClick }: Props) {
  const selectedCode = useAppSelector(state => state.main.code);

  return (
    <S.Category>
      {data.map(({ code, name }) => {
        return (
          <S.CategoryItem key={code} onClick={() => onClick(code)}>
            <S.CategoryLink selected={selectedCode === code} href="#none">
              {name}
            </S.CategoryLink>
          </S.CategoryItem>
        );
      })}
    </S.Category>
  );
}
