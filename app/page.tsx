'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col p-6">
      <h1 className="text-3xl font-bold mb-6">
        Parqueadero San Jorge 22
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          href="/ingreso"
          className="bg-white text-black text-xl p-4 rounded-lg text-center font-semibold"
        >
          ➕ Ingreso de vehículo
        </Link>

        <Link
          href="/adentro"
          className="bg-white text-black text-xl p-4 rounded-lg text-center font-semibold"
        >
          🚗 Vehículos adentro
        </Link>

        <Link
          href="/caja"
          className="bg-white text-black text-xl p-4 rounded-lg text-center font-semibold"
        >
          💰 Caja del día
        </Link>
      </div>
    </main>
  )
}
