module.exports = {
  apps: [
    {
      name: 'BAD-API',
      script: 'build/app.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 'max',
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        PORT: 6699,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 6699,
        NODE_ENV: 'production',
      },
      output: './logs/out/out.log',
      error: './logs/error/error.log',
      log: './logs/combined/combined.outerr.log',
    },
  ],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};
