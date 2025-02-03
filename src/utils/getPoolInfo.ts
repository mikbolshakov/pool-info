import { ethers } from 'ethers';
import getABI from './getABI';
import getTokenInfo from './getTokenInfo';
import saveData from '../utils/saveData';
import { PROVIDER } from '../config/config';

export default async function getPoolInfo(poolAddress: string) {
  try {
    const poolAbi = await getABI(poolAddress);
    const poolContract = new ethers.Contract(poolAddress, poolAbi, PROVIDER);

    const [token0, token1] = await Promise.all([poolContract.token0(), poolContract.token1()]);

    const [token0Info, token1Info] = await Promise.all([
      getTokenInfo(token0),
      getTokenInfo(token1),
    ]);

    const poolInfo = {
      address: poolAddress,
      abi: poolAbi,
      tokens: {
        base: token0Info,
        quote: token1Info,
      },
    };

    const fileName = `${poolInfo.tokens.base?.symbol}_${poolInfo.tokens.quote?.symbol}_pool_info.json`;
    saveData(fileName, poolInfo, 'chainData/pools');

    return poolInfo;
  } catch (error) {
    console.error('Error fetching pool information:', (error as Error).message);
  }
}
