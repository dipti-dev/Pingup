import { serve } from "inngest/express";
import express from 'express';
import { inngest, functions } from "../server/inngest/index.js";

const router = express.Router();

// Inngest serve handler with all HTTP methods
const handler = serve({ client: inngest, functions });

// Apply handler to all methods
router.use(handler);

export default router;
