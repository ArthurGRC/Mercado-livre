import { codeChallenge } from "../../App/utils/cripto";
import { useEffect } from "react"

export default function Auth(){
  useEffect(() => {
    const authorizationUrl = `https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  
    window.location.href = authorizationUrl;
  })

  return(
    <h1>Autenticando...</h1>
  )
}
