import { helloWorld } from '@/config'
import { join } from 'path';
import ts from '@/utils/timestamp';
import log from '@/utils/logger';

(async () => {
  console.log(helloWorld)
  console.log(join(process.cwd(), 'index.ts'))
  console.log( ts.getFullDate() )

  log.header('Hola munfo!')
  log.info(process.env.TEST_API || '')
})();
