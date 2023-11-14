import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getToken } from '../services/mercado-livre/authetication'
import { useMemo } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  await getToken()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={getToken} className="fixed left-0 top-0 flex w-full justify-center mt-10">
          Autentique-se
        </button>
      </div>
    </main>
  )
}
