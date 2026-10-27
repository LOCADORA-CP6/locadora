import { Link } from "react-router-dom"

const Footer = () => {
    const ano = new Date().getFullYear()
  
    return (
    <footer className="mt-auto border-t border-neutral-800 bg-neutral-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-400 sm:flex-row">
            <p>&copy; {ano} Locadora. Todos os direitos reservados.</p>

            <nav className="flex items-center gap-6">
                <Link to="/" className="transition-all duration-300 hover:text-white">Início</Link>
                <Link to="/carros" className="transition-all duration-300 hover:text-white">Carros</Link>
            </nav>
        </div>
    </footer>
  )
}

export default Footer