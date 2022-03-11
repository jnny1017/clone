export function CategoryFilter({ category }: any) {
  return (
    <ul>
      {category.data.md_choices.map((it: any) => {
        return (
          <li key={it.code}>
            {it.name}
          </li>
        )
      })}
    </ul>
  )
}
