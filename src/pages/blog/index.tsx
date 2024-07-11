import { Link } from "react-router-dom";

export function Blog() {
  return (
    <div className="h-screen-minus-header text-center flex flex-col items-center justify-center">
      <h1 className="text-black text-7xl">Desculpe, estamos em Manutenção</h1>
      <Link to="/" className="text-xl font-semibold mt-8">Volte para a Página Home</Link>
    </div>
  )
}