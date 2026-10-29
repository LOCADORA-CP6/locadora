import { useState } from "react"
import { createPortal } from "react-dom"

const hoje = () => new Date().toISOString().split("T")[0]

const Card = ({ modelo, marca, categoria, preco, imagem, specs }) => {
  const [aberto, setAberto] = useState(false)
  const [retirada, setRetirada] = useState("")
  const [devolucao, setDevolucao] = useState("")
  const [confirmado, setConfirmado] = useState(false)

  const dias = retirada && devolucao
    ? Math.round((new Date(devolucao) - new Date(retirada)) / 86400000)
    : 0

  const fechar = () => {
    setAberto(false)
    setRetirada("")
    setDevolucao("")
    setConfirmado(false)
  }

  const confirmar = (e) => {
    e.preventDefault()
    if (dias > 0) setConfirmado(true)
  }

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
          <button onClick={() => setAberto(true)} className="rounded-full bg-neutral-900 px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-neutral-800">Alugar</button>
        </div>
      </div>

      {aberto && createPortal(
        <div onClick={fechar} className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 px-4">
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {confirmado ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-neutral-900">Reserva confirmada</h3>
                <p className="mt-3 text-neutral-500">
                  {marca} {modelo} reservado por {dias} {dias === 1 ? "dia" : "dias"}. Total: R$ {dias * preco}.
                </p>
                <button onClick={fechar} className="mt-6 rounded-full bg-neutral-900 px-6 py-2 text-white transition-all duration-300 hover:bg-neutral-800">Fechar</button>
              </div>
            ) : (
              <form onSubmit={confirmar}>
                <span className="text-sm text-neutral-400">{categoria}</span>
                <h3 className="mt-1 text-xl font-semibold text-neutral-900">Alugar {marca} {modelo}</h3>

                <label className="mt-6 block text-sm text-neutral-600">
                  Retirada
                  <input type="date" required min={hoje()} value={retirada} onChange={(e) => setRetirada(e.target.value)} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-neutral-900" />
                </label>
                <label className="mt-4 block text-sm text-neutral-600">
                  Devolução
                  <input type="date" required min={retirada || hoje()} value={devolucao} onChange={(e) => setDevolucao(e.target.value)} className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-neutral-900" />
                </label>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
                  <span className="text-neutral-500">{dias > 0 ? `${dias} ${dias === 1 ? "dia" : "dias"}` : "Selecione as datas"}</span>
                  <span className="text-xl font-semibold text-neutral-900">R$ {dias > 0 ? dias * preco : 0}</span>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button type="button" onClick={fechar} className="rounded-full px-5 py-2 text-neutral-600 transition-all duration-300 hover:text-neutral-900">Cancelar</button>
                  <button type="submit" disabled={dias <= 0} className="rounded-full bg-neutral-900 px-5 py-2 text-white transition-all duration-300 hover:bg-neutral-800 disabled:opacity-40">Confirmar</button>
                </div>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </article>
  )
}

export default Card
