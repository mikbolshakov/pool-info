import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const ALCHEMY_RPC_URL = process.env.ALCHEMY_RPC_URL as string;
export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY as string;

if (!ALCHEMY_RPC_URL || !ETHERSCAN_API_KEY) {
  console.error('Error: Please specify ALCHEMY_RPC_URL and ETHERSCAN_API_KEY in the .env file.');
  process.exit(1);
}

export const PROVIDER = new ethers.JsonRpcProvider(ALCHEMY_RPC_URL);
