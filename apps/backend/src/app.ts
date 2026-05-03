import { Hono } from "hono";

export type AppEnv = {
  Bindings: CloudflareBindings;
};

export const app = new Hono<AppEnv>();

app.get("/", (c) => {
  return c.json({
    name: "@esc/backend",
    status: "ok",
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "ok",
  });
});
