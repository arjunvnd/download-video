import express, { Application, Request, Response, NextFunction } from 'express';
const youtubedl = require('youtube-dl-exec');

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
    youtubedl('https://www.youtube.com/watch?v=HnKaaDcWOXw', {
        dumpSingleJson: true,
        noWarnings: true,
        noCallHome: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
        youtubeSkipDashManifest: true,
        referer: 'https://www.youtube.com/watch?v=HnKaaDcWOXw',
    }).then((output) => console.log(output));
    res.status(200).send({ data: 'Hello from Ornio AS' });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
