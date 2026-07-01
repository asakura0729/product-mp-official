import cors from 'cors';
import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    endpoints: ['/api/health'],
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Node.js API サーバーは正常に動作しています',
    timestamp: new Date().toISOString(),
  });
});

export default app;

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`API server listening on http://localhost:${port}`);
  });
}
