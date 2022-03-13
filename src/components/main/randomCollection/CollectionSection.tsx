import { RandomCollectionData, RandomCollectionData2 } from 'pages/main/data';
import MainSection from 'components/main/section'

export function CollectionSection() {
  return (
    <>
      <MainSection data={RandomCollectionData} />
      <MainSection data={RandomCollectionData2} />
      {/* TODO 똑같은 컴포넌트로 데이터만 다르게 여러개 불러와야하는데 어떤 방법이 있을까 */}
    </>
  )
}
