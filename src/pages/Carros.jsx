import Card from "../components/Card"
import mobi from "../assets/images/fiatmobi.webp"
import kwid from "../assets/images/kwid.webp"
import argo from "../assets/images/fiatargo.webp"
import hb20 from "../assets/images/hb20.webp"
import onix from "../assets/images/onix.webp"
import polo from "../assets/images/polo.webp"
import cronos from "../assets/images/cronos.webp"
import tcross from "../assets/images/tcross.webp"
import renegade from "../assets/images/jeep.webp"

const carros = [
  { marca: "Fiat", modelo: "Mobi", categoria: "Econômico", preco: 119, imagem: mobi, specs: ["Manual", "4 portas", "Ar-condicionado"] },
  { marca: "Renault", modelo: "Kwid", categoria: "Econômico", preco: 115, imagem: kwid, specs: ["Manual", "4 portas", "Ar-condicionado"] },
  { marca: "Fiat", modelo: "Argo", categoria: "Hatch", preco: 139, imagem: argo, specs: ["Manual", "5 lugares", "Ar-condicionado"] },
  { marca: "Hyundai", modelo: "HB20", categoria: "Hatch", preco: 145, imagem: hb20, specs: ["Manual", "5 lugares", "Ar-condicionado"] },
  { marca: "Chevrolet", modelo: "Onix", categoria: "Hatch", preco: 149, imagem: onix, specs: ["Automático", "5 lugares", "Ar-condicionado"] },
  { marca: "Volkswagen", modelo: "Polo", categoria: "Hatch", preco: 155, imagem: polo, specs: ["Automático", "5 lugares", "Ar-condicionado"] },
  { marca: "Fiat", modelo: "Cronos", categoria: "Sedã", preco: 165, imagem: cronos, specs: ["Automático", "Porta-malas 525 L", "Ar-condicionado"] },
  { marca: "Volkswagen", modelo: "T-Cross", categoria: "SUV", preco: 219, imagem: tcross, specs: ["Automático", "5 lugares", "Ar-condicionado"] },
  { marca: "Jeep", modelo: "Renegade", categoria: "SUV", preco: 239, imagem: renegade, specs: ["Automático", "5 lugares", "Ar-condicionado"] },
]

const Carros = () => {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Nossos carros</h1>
        <p className="mt-4 text-neutral-500">Os modelos mais alugados do Brasil, prontos para a sua próxima viagem.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {carros.map((carro) => (
            <Card key={`${carro.marca}-${carro.modelo}`} {...carro} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Carros
