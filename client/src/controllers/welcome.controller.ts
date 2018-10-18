import * as express from 'express';

// Assign router to the express.Router() instance
const router: express.Router = express.Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it`s /welcome
router.get('/', (req: express.Request, res: express.Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:name', (req: express.Request, res: express.Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

const WelcomeController: express.Router = router;
// Export the express.Router() instance to be used by server.ts
export { WelcomeController };