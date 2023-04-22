import "dotenv/config"

export const dbconfig = {
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    server:process.env.DB_SERVER,
    database:process.env.DB_NAME,
    options: {
        trustServerCertificate:true,
        trustedConnection:true
    }
}