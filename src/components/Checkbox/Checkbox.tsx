interface Props {
  id: string;
}

export default function Checkbox({ id }: Props) {
  return (
    <>
      <label htmlFor={id} />
      <input type="checkbox" id={id} />
    </>
  );
}
