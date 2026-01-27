import { serve } from "inngest/express";
import express from 'express';

// Create Inngest client
const inngest = new (await import("inngest")).Inngest({ id: "pingup-app" });

// Create a test function
const syncUserCreation = inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event})=>{
        console.log('User created event received:', event.data);
        return { success: true };
    }
);

export const functions = [syncUserCreation];

const router = express.Router();

// Inngest serve handler with all HTTP methods
const handler = serve({ client: inngest, functions });

// Apply handler to all methods
router.use(handler);

export default router;
