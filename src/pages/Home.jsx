import { Link } from "react-router-dom"

const destaques = [
  { titulo: "Retirada rápida", texto: "Reserve online e retire o carro sem filas."},
  { titulo: "Preço transparente", texto: "Sem taxas escondidas. O valor exibido é o valor pago."},
  { titulo: "Frota revisada", texto: "Veículos novos e com manutenção em dia."},
]

const Home = () => {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-24 text-center sm:pt-24">
        <span className="rounded-full border border-neutral-200 px-4 py-1 text-sm text-neutral-500">Aluguel de carros simples e sem complicação</span>
        <h1 className="nt-6 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">O carro certo para cada viagem.</h1>
        <p className="mt-6 max-w-xl text-base text-neutral-500 sm:text-lg">Escolha entre modelos compactos, sedãs e SUVs. Reserve em poucos minutos e pegue a estrada.</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/carros" className="rounded-full bg-neutral-900 px-8 py-3 text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800">Ver carros</Link>
          <a href="#como-funciona" className="rounded-full px-8 py-3 text-neutral-600 transition-all duration-300 hover:text-neutral-900">Como funciona</a>
        </div>
      </section>

      <section id="como-funciona" className="border-t border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          {destaques.map((item, i) => (
            <div key={item.titulo}>
              <span className="text-sm text-neutral-400">0{i + 1}</span>
              <h2 className="mt-2 text-lg font-medium text-neutral-900">{item.titulo}</h2>
              <p className="mt-2 text-neutral-500">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home