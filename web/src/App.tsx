interface PropButtons {
  text?: string;
}

function Botao(prop: PropButtons) {
  return <button className="text-center border-2-black p-2 bg-indigo-600 h-10 hover:bg-indigo-400">{ prop.text ?? "Enviar" }</button>
}

function App() {
  return <div className="flex gap-2">
    <Botao text="OK"></Botao>
    <hr />
    <Botao text="Teste"></Botao>
    <br />
  </div>
}

export default App
