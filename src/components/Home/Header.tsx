import { useRouter } from "next/router";

function Header(){
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/auth')
  }

  return(
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <button onClick={handleClick} className="fixed left-0 top-0 flex w-full justify-center mt-10">
        Assinar
      </button>
    </div>
  )
}

export { Header };