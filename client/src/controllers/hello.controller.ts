import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import {renderToString} from 'react-dom/server';
import * as react from 'react';

import { Hello } from '../components';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    var element = react.createElement(Hello);

    const app = renderToString(element);
    const indexFile = path.resolve('./dist/index.html');
    
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
        }
    
        return res.send(
          data.replace('<div id="injection"></div>', `<div id="root">${app}</div>`)
        );
      });
});

const HelloController: express.Router = router;
// Export the express.Router() instance to be used by server.ts
export { HelloController };