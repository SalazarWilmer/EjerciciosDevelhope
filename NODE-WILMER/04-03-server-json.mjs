import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  const jsonResponse = {
    location: "Mars",
  };

  const jsonResponseBody = JSON.stringify(jsonResponse);

  response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Length", Buffer.byteLength(jsonResponseBody).toString());

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
