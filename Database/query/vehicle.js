const sql = require ('../mssqlConnector');
const mssql = require ('mssql');

const getCities = async () => {
    const pool = await sql.getConnection();
    try {
       let result = await pool.request()
            .execute('SP_cities')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}
const vehicle = async (data) => {
    const pool = await sql.getConnection();
    
    try {
        let result  = await pool.request()
            .input('cityID', mssql.Int, data.cityID)
            .execute('SP_vehicles')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}
const travel = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc', mssql.BigInt,data.tc)
            .input('vehicleID',mssql.Int, data.vehicleID)
            .execute('SP_travel')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}
const getPastJourneys = async (data) => {
    const pool = await sql.getConnection();
    try {
        let result = await pool.request()
            .input('tc',mssql.BigInt,data.tc)
            .execute('SP_pastJourneys')
            return result;
    } catch (error) {
        return { status: 404, message: error.originalError.info.message };
    }
}

module.exports = {
    getCities,
    travel,
    getPastJourneys,
    vehicle,
}