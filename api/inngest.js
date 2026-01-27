import { serve } from "inngest/express";
import { inngest } from "../server/inngest/index.js";
import { functions } from "../server/inngest/index.js";

const app = require('../server/api/index.js');

app.use('/api/inngest', serve({ client: inngest, functions }));

export default app;
