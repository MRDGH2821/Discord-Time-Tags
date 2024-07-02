import http from 'node:http';

const PORT = 9000;

http
  .createServer((_, res) => {
    const uptime = process.uptime();
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const date = new Date();
    const healthMessage = {
      message: 'TTG-Bot is healthy',
      uptime,
      timestamp: date.valueOf(),
      time: date.toISOString(),
    };
    try {
      res.end(JSON.stringify(healthMessage));
    } catch (error: unknown) {
      healthMessage.message = JSON.stringify(error);
      res.writeHead(503);
      res.end(JSON.stringify(healthMessage));
    }
  })
  .listen(PORT, () => {
    console.info(`Health Server running on port ${PORT}`);
  });
