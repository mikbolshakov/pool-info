# Pool Info Fetcher

This project allows you to retrieve and store information about ERC-20 tokens and Uniswap V2 liquidity pools using the Etherscan API and Ethereum smart contracts.

## Features

- Fetch and store ERC-20 token information (symbol, decimals, ABI).
- Fetch and store liquidity pool information (token0, token1, ABI).
- Save data in structured JSON files.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/mikbolshakov/pool-info.git
   cd pool-info
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the required environment variables:
   ```
   ALCHEMY_RPC_URL=<your_alchemy_rpc_url>
   ETHERSCAN_API_KEY=<your_etherscan_api_key>
   ```

## Usage

Run the script using `ts-node`:

- Fetch LINK token information:
  ```
  ts-node src/index.ts token 0x514910771AF9Ca656af840dff83E8264EcF986CA
  ```
- Fetch WETH/USDT pool information:
  ```
  ts-node src/index.ts pool 0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852
  ```

## Project Structure

- `src/utils/getABI.ts` - Fetches contract ABI from Etherscan.
- `src/utils/getTokenInfo.ts` - Retrieves and saves token data.
- `src/utils/getPoolInfo.ts` - Retrieves and saves pool data.
- `src/utils/saveData.ts` - Saves the data in the folder.
- `src/index.ts` - Entry point for executing token or pool information fetching.
- `config/config.ts` - Loads environment variables.

## Output

Token and pool data are stored in the `chainData/` directory:

- Tokens: `chainData/tokens/<symbol>_token_info.json`
- Pools: `chainData/pools/<token0_symbol>_<token1_symbol>_pool_info.json`
