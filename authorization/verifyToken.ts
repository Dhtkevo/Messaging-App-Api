import type { Request, Response, NextFunction } from "express";
interface RequestToken extends Request {
  token?: string;
}

export default function verifyToken(
  req: RequestToken,
  res: Response,
  next: NextFunction
) {
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
