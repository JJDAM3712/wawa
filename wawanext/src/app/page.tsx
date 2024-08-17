import Link from "next/link";
import Image from "next/image";
import bus from "@/app/public/images/wallhaven-x8vjyd.jpg"

const Home = () => {
  return (
    <main className="content">
        <div className="img_backgorund">
          <Image 
            src={bus}
            alt="Imagen de autobus"
            className="img_bus"
          />
        </div>
        <h1 className="welcome_title">Bienvenido!</h1>
        <p>¿Deseas viajar hacia algún destino?</p>
        <Link href="/routes" className="rutas">
          Conoce nuestras rutas
        </Link>
    </main>
  );
}

export default Home;