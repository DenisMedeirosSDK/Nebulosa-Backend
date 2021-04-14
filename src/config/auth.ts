export default {
  jwt: {
    secretToken: process.env.SECRET_TOKEN,
    expiresInToken: parseInt(process.env.EXPIRES_IN_TOKEN),
    secretRefreshToken: process.env.SECRET_REFRESH_TOKEN,
    expiresInRefreshToken: parseInt(process.env.EXPIRES_IN_REFRESH_TOKEN),
    expiresInRefreshTokenDays: Number(process.env.EXPIRES_REFRESH_TOKEN_DAYS)
  }
}
