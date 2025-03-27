import { Request, Response } from "express";

export function root(request: Request, response: Response) {
  const { url } = request;
  response.send(
    `<h1>Express Template</h1><p>Welcome to the backend page. Your path is ${url}</p>`
  );
}
