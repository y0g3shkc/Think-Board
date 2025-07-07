const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");
const dotenv = require("dotenv");

dotenv.config();

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
});

module.exports = ratelimit;
