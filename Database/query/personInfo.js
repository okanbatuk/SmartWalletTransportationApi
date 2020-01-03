const sql = require('../mssqlConnector');
const mssql = require('mssql');

const getPersonInfo = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc',mssql.BigInt,data.tc)
            .execute('SP_personInfo')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports = {
    getPersonInfo
}