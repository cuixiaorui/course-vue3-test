module.exports = {
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
};
