// lib/mercadolivre.js

import axios from 'axios';

export async function getItems(accessToken: any) {
  const meliObject = axios.create({
    baseURL: 'https://api.mercadolibre.com',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  try {
    const user = await meliObject.get('/users/me');
    const items = (await meliObject.get(`/users/${user.data.id}/items/search`)).data.results || [];
    const result = await Promise.all(
      items.map((item_id: any) => meliObject.get(`/items/${item_id}`))
    );
    return result.map((response) => response.data);
  } catch (error) {
    console.error('Erro na chamada à API do Mercado Livre:', error);
    throw error;
  }
}
