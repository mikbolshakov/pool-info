import getPoolInfo from './utils/getPoolInfo';
import getTokenInfo from './utils/getTokenInfo';

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log('Usage:');
  console.log('  ts-node src/index.ts token <token_address>');
  console.log('  ts-node src/index.ts pool <pool_address>');
  process.exit(1);
}

const [mode, address] = args;

(async () => {
  if (mode === 'token') {
    await getTokenInfo(address);
  } else if (mode === 'pool') {
    await getPoolInfo(address);
  } else {
    console.log("Invalid mode. Use 'token' or 'pool'.");
  }
})();
