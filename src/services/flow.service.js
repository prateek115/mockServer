const { getPool, sql } = require("../config/db");

const flowService = {
  async saveFlowRequest(body) {
    const { bflowid, service, inbound_number, projectname, skillname } = body;
    const rawPayload = JSON.stringify(body);

    const db = await getPool();
    const result = await db
      .request()
      .input("bflowid",         sql.NVarChar(255),     bflowid)
      .input("service",         sql.NVarChar(255),     service)
      .input("inbound_number",  sql.NVarChar(50),      inbound_number)
      .input("projectname",     sql.NVarChar(255),     projectname)
      .input("skillname",       sql.NVarChar(255),     skillname)
      .input("raw_payload",     sql.NVarChar(sql.MAX), rawPayload)
      .query(`
        INSERT INTO flow_requests
          (bflowid, service, inbound_number, projectname, skillname, raw_payload)
        OUTPUT INSERTED.id, INSERTED.created_at
        VALUES
          (@bflowid, @service, @inbound_number, @projectname, @skillname, @raw_payload)
      `);

    return result.recordset[0];
  },

  async getivrqueuedata(inbound_number, service) {
    const db = await getPool();
     const result = await db.request()
    .input('inboundnumber', sql.VarChar, inbound_number)
    .input('service', sql.VarChar, service)
    .query(`
      UPDATE flow_requests
      SET verified = 1
      OUTPUT inserted.*
      WHERE inbound_number = @inboundnumber
      AND service = @service
      AND verified = 0
    `);

    return result.recordset;
  },


};

module.exports = flowService;
