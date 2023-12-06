import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { Header } from '../src/components/Home/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header></Header>
    </main>
  )
}
