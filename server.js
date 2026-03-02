require("dotenv").config();
const app = require("./src/app");
const { initDB } = require("./src/utils/initDB");

const PORT = process.env.PORT || 3000;

(async () => {
  await initDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})();
