db.createUser({
  user: 'mongo',
  pwd: 'mongo',
  roles: [
    {
      role: 'readWrite',
      db: 'nest-demo'
    }
  ]
});