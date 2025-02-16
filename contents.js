export const getDeleteContent = (modelName) => `
import { eq } from "drizzle-orm";
import { db } from "~~/server/db";
import { ${modelName} } from "~~/server/db/schemas/${modelName}";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, _session) => {
  const { id } = getRouterParams(event);

  return db.delete(${modelName}).where(eq(${modelName}.id, id)).execute();
});
`;

export const getGetContent = (modelName) => `
import { eq } from "drizzle-orm";
import { db } from "~~/server/db";
import { ${modelName} } from "~~/server/db/schemas/${modelName}";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, _session) => {
  const { id } = getRouterParams(event);

  return db.select().from(${modelName}).where(eq(${modelName}.id, id)).get();
});
`;

export const getPutContent = (modelName) => `
import { eq } from "drizzle-orm";
import { db } from "~~/server/db";
import { ${modelName} } from "~~/server/db/schemas/${modelName}";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, _session) => {
  const body = await readBody(event);

  const { id } = getRouterParams(event);

  return db.update(${modelName}).set(body).where(eq(${modelName}.id, id)).returning().get();
});
`;

export const getCreateContent = (modelName) => `
import { db } from "~~/server/db";
import { ${modelName} } from "~~/server/db/schemas/${modelName}";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, session) => {
  const body = await readBody(event);

  return db.insert(${modelName}).values(body).returning().get();
});
`;

export const getListContent = (modelName) => `
import { db } from "~~/server/db";
import { ${modelName} } from "~~/server/db/schemas/${modelName}";
import { defineEventHandlerWithAuth } from "~~/server/utils/auth/event-handler";

export default defineEventHandlerWithAuth(async (event, session) => {
  return db.select().from(${modelName}).all();
});
`;
