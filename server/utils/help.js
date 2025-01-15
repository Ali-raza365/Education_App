const uid = function () {
  return "id" + Date.now().toString(36) + Math.random().toString(36).substr(2);
};

module.exports = {
  uid,
};
