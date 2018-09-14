module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: {
      host: '127.0.0.1',
      port: 15432,
      user: 'myapp',
      password: 'dbpass',
      database: 'postgres'
    },
    pool: {
      max: 100
    }
  }
}