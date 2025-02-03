import axios from 'axios';
import { ETHERSCAN_API_KEY } from '../config/config';

export default async function getABI(address: string): Promise<string[]> {
  try {
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);

    if (response.data.status === '1') {
      return JSON.parse(response.data.result);
    } else {
      throw new Error(`Error fetching ABI: ${response.data.message}`);
    }
  } catch (error) {
    console.error('Error fetching vABI:', (error as Error).message);
    process.exit(1);
  }
}
