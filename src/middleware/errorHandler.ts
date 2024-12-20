import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message
    });
  }

  // Handle RSS feed errors
  if (err.message.includes('RSS') || err.message.includes('feed')) {
    return res.status(503).json({
      success: false,
      error: 'News service temporarily unavailable'
    });
  }

  // Default error response
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
}