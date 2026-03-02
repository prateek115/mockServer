const { getPool } = require("../config/db");

async function initDB() {
  const db = await getPool();
  await db.request().query(`
    IF NOT EXISTS (
      SELECT * FROM sysobjects WHERE name='flow_requests' AND xtype='U'
    )
    CREATE TABLE flow_requests (
      id             INT IDENTITY(1,1) PRIMARY KEY,
      bflowid        NVARCHAR(255) NOT NULL,
      service        NVARCHAR(255) NOT NULL,
      inbound_number NVARCHAR(50)  NOT NULL,
      projectname    NVARCHAR(255) NOT NULL,
      skillname      NVARCHAR(255) NOT NULL,
      raw_payload    NVARCHAR(MAX) NOT NULL,
      created_at     DATETIME      DEFAULT GETDATE()
    )
  `);
  console.log("✅ Table ready: flow_requests");
}

module.exports = { initDB };
