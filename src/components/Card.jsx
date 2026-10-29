const Card = ({ modelo, marca, categoria, preco, imagem, specs }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex aspect-video items-center justify-center bg-neutral-100">
        {imagem ? (
          <img src={imagem} alt={`${marca} ${modelo}`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-neutral-400">Foto do carro</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-sm text-neutral-400">{categoria}</span>
        <h2 className="mt-1 text-lg font-medium text-neutral-900">{marca} {modelo}</h2>

        <ul className="mt-4 flex flex-wrap gap-2">
          {specs.map((spec) => (
            <li key={spec} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-500">{spec}</li>
          ))}
        </ul>

        <div className="mt-6 flex items-end justify-between">
          <p className="text-neutral-500">
            <span className="text-2xl font-semibold text-neutral-900">R$ {preco}</span> /dia
          </p>
          <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-neutral-800">Alugar</button>
        </div>
      </div>
    </article>
  )
}

export default Card
