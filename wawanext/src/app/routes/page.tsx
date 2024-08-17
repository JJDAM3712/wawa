"use client";
import Link from "next/link";
import { BotonAtras } from "@/components/AtrasButton";
import rutas from "@/app/public/rutas.json";

const Rutas = () => {
  return (
    <main>
        <BotonAtras/>
        <div className="px-20">
            <div className="px-4 sm:px-0">
                <h3 className="text-4xl font-semibold leading-7 text-gray-900">Rutas disponibles</h3>
                <p className="mt-1 max-w-2xl text-xl leading-6 text-gray-500">Lista de todas las rutas disponibles por el momento.</p>
            </div>
            {rutas.map(ruta => (
                <div key={ruta.id} className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">
                                Desde
                                <strong> {ruta.origen}</strong> a 
                                <strong> {ruta.destino}</strong> - 
                                $<strong>{ruta.precio} </strong>
                            </dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <Link className="back" href={`routes/${ruta.id}`}>
                                    Detalles
                                </Link>
                            </dd>
                        </div>
                    </dl>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Rutas;