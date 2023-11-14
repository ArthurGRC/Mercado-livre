import axios from 'axios';
const qs = require('querystring');

export async function getToken() {
  const meliObject = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const requestData = {
    'grant_type': 'authorization_code',
    'client_id': '3632325280024673',
    'client_secret': '2W3IZP1yCgNWYVhzbQ9OvYNXucJXswT9',
    'code': 'TG-6552c4489f2a400001d1f794-1284340481',
    'redirect_uri': 'https://intimate-externally-beetle.ngrok-free.app/',
    'code_verifier': 'T9qV3x9xJVyaazrZ14q89JDbKulnl8ZCThO8Y3jGjc0'
  }
  console.log(requestData)

  try {
    const response = await meliObject.post('/oauth/token', qs.stringify(requestData));
    console.log('TOKEN==>', response?.data?.access_token)
    return response?.data?.access_token;
  } catch (error) {
    console.error('Erro ao obter o token de acesso:', error);
    throw error;
  }
}
