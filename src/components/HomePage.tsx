export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: '40rem',
        backgroundColor: '#0000ff',
        margin: "auto",
        padding: "15px",
      }}>
      <h1>Bem-vinde, Techmaker!</h1>
      <h3>Espero que tenha gostado do workshop! =)
        <br /> Nele falamos sobre:
      </h3>
      <ul>
        <li>A vantagem que o React traz de componentizar uma aplicação</li>
        <li>Criar componentes utilizando o React</li>
        <li>Como fazer isso por meio de arquivos TSX (injetando HTML dentro do typescript)</li>
        <li>Formas possíveis de se estilizar esses componentes</li>
        <li>Evitar a repetição desnecessária na hora de renderizar componentes iguais, utilizando uma função do javascript chamada <b>map</b></li>
        <li>Criar rotas pra nossa aplicação</li>
      </ul>

      <h3>Não mudei muita coisa no projeto pra que você consiga usar esse código pra revisar o que fizemos durante o workshop sem adicionar mais complexidade por enquanto.
        <br /> <br />O que fiz apenas foi adicionar um componente HomePage para renderizar na rota raiz, que é essa página aqui que você tá lendo.
        <br /><br />Para acessar as outras rotas, basta acessar o arquivo Routes.tsx e verificar quais são os nomes delas.
        <br /><br />Aproveite pra criar mais funcionalidades dentro dessas rotas, usando os conceitos que aprendemos.
        <br /><br />Qualquer dúvida, fala comigo. Um abraço =)
      </h3>
    </div >
  )
}
