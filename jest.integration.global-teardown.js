module.exports = async function (config) {
  if (global.__HTTP_SERVER__) {
    await global.__HTTP_SERVER__.kill();
  }
  if (global.__MONGO_SERVER__) {
    await global.__MONGO_SERVER__.stop();
  }
};
