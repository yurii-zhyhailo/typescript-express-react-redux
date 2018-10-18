// Import everything from express and assign it to the express variable
import * as express from 'express';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on 
const port: number =  parseInt(process.env.PORT || '8000');

app.use(express.static('./dist'));

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}`);
});

