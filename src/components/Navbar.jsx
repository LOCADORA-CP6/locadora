import { Link, NavLink } from "react-router-dom"
import { Car } from "@boxicons/react"

const linkClass = ({ isActive }) =>
  `relative text-base transition-all duration-300 hover:-translate-y-0.5
   after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
   after:bg-white after:rounded-full after:origin-left after:transition-transform after:duration-300
   hover:after:scale-x-100 ${
     isActive
       ? "text-white after:scale-x-100"
       : "text-neutral-300 hover:text-white after:scale-x-0"
  }`

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 flex items-center gap-8 w-fit mx-auto my-6 bg-neutral-900 rounded-full p-2 pr-8 shadow-xl">
      <Link
        to="/"
        className="flex items-center justify-center w-11 h-11 bg-white rounded-full shrink-0 hover:scale-105 transition-transform"
      >
        <Car/>
      </Link>
      

      <nav className="flex items-center gap-8">
        <NavLink to="/" end className={linkClass}>
          LOCADORA
        </NavLink>
        <NavLink to="/carros" className={linkClass}>
          Carros
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar