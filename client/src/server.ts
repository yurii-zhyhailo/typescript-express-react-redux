// Import everything from express and assign it to the express variable
import * as express from 'express';

// Import WelcomeController from controllerrs entry point
import { WelcomeController, HelloController } from './controllers'

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on 
const port: number =  parseInt(process.env.PORT || '8000');


// Mount the WelcomeController at the /welcome route
app.use('/hello', HelloController)
app.use('/welcome', WelcomeController);

app.use(express.static('./dist'));

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}`);
});

