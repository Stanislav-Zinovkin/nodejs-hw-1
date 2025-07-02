import { fileURLToPath } from 'url';
import path, {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const PATH_DB = path.join(__dirname, '..',  'db', 'db.json');
