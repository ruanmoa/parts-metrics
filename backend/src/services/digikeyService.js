import axios from 'axios';
import dotenv from 'dotenv';

export async function getAccessToken() {
  try {

    dotenv.config();

    const data = {
      client_id: process.env.CLIENT_ID, 
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'client_credentials',
    }

    const encodedData = new URLSearchParams(data).toString();
    const response = await axios.post('https://api.digikey.com/v1/oauth2/token', encodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Erro ao obter o token:', error.message);
    throw error; 
  }
}

export async function queryApiForComponents(partNumbers) {
  const accessToken = await getAccessToken();
  dotenv.config();

  const promises = partNumbers.map(async (part) => {
    try {
      const response = await axios.get(`https://api.digikey.com/products/v4/search/${part.partNumber}/pricing`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-DIGIKEY-Client-Id': process.env.CLIENT_ID
        }
      });

      return { partNumber: part.partNumber, data: response.data };
    } catch (error) {
      console.error(`Erro ao consultar o componente ${part.partNumber}:`, error.response ? error.response.data : error.message);
      return { partNumber: part.partNumber, error: error.message };
    }
  });

  const results = await Promise.all(promises);
  return results;
}
