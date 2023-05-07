type TechWomanProps = {
  name: string
}

export default function TechWoman(props: TechWomanProps) {
  return (
    <h1> Olá, {props.name}!</h1>
  )
}
