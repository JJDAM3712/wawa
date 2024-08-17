"use client";
import { useParams  } from "next/navigation";
import { useState, useEffect } from "react";
import { BotonAtras } from "@/components/AtrasButton";
import rutas from "@/app/public/rutas.json";
import BusRoute from "@/app/public/type";

const DetallesRutas = () => {
    const {id} = useParams();
    const [ruta, setRuta] = useState<BusRoute | null>(null);

    useEffect(() => {
        if (id) {
            const rutaId = Array.isArray(id) ? id[0] : id;
            const rutaEncontrada = rutas.find(r => r.id === parseInt(rutaId));
            setRuta(rutaEncontrada || null);
        }
    }, [id]);

    if(!ruta) return <p>Esta ruta no existe</p>;

    return (
        <main >
            <BotonAtras />
            <div className="grid place-items-center h-screen">
                <div className="px-4 sm:px-0">
                    <h3 className="text-3xl font-semibold leading-7 text-gray-900">Detalles de la {ruta.ruta}</h3>
                    <p className="mt-1 max-w-2xl text-xl leading-6 text-gray-500">Información detallada sobre esta ruta.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Origen</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.origen}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Destino</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.destino}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Duración</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.duracion}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Fecha de viaje</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.fecha}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Hora de salida</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.h_salida}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Hora de llegada</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.h_llegada}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Costo del pasaje</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${ruta.precio}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Número de autobús</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">n° {ruta.n_bus}</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-xl font-medium leading-6 text-gray-900">Capacidad</dt>
                            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ruta.capacidad} personas</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </main>    
    )
}

export default DetallesRutas;