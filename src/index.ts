import express, { Express, Request, Response } from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
   res.send('Hello from Express! 🎉');
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});