import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
  return {
      statusCode: 200,
      secret: "This is a secret message from the server API route!",
    };
});
