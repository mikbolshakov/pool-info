import { ethers } from 'ethers';
import getABI from './getABI';
import saveData from '../utils/saveData';
import { PROVIDER } from '../config/config';

export default async function getTokenInfo(tokenAddress: string) {
  try {
    const abi = await getABI(tokenAddress);
    const contract = new ethers.Contract(tokenAddress, abi, PROVIDER);

    const [symbol, decimals] = await Promise.all([contract.symbol(), contract.decimals()]);

    const tokenInfo = {
      address: tokenAddress,
      symbol,
      decimals: decimals.toString(),
      abi,
    };

    const fileName = `${symbol}_token_info.json`;
    saveData(fileName, tokenInfo, 'chainData/tokens');

    return tokenInfo;
  } catch (error) {
    console.error('Error fetching token information:', (error as Error).message);
  }
}
