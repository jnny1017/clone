interface Props {
  id: string;
  label?: string;
}

export default function Checkbox({ id, label }: Props) {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
