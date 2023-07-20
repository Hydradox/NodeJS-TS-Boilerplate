import { helloWorld } from '@/config'
import { join } from 'path';

(async () => {
  console.log(helloWorld)
  console.log(join(process.cwd(), 'index.ts'))
})();
