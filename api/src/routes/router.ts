import {Application, Router, Request, Response, NextFunction} from 'express';

const router =  (app: Application) => {
  // Init your main express router
  const apiRouter: Router = Router();

  // Handle GET request to /api/v1
  apiRouter.get('/', (req: Request, res: Response) => {
      res.status(200).json({message: "This is where the awesomeness happen..."});
  });

  app.use('/api/v1', apiRouter);
};

export default router;