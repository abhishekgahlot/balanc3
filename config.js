module.exports = {
  db: {
    url: 'mongodb://localhost:27017/',
    name: 'balanc3',
    collection: 'transactions',
    index: {
      address: 1,
    },
  },
  etherscanurl: 'http://api.etherscan.io/api?module=account&action=txlist&address=ADDRESS&startblock=0&endblock=99999999&sort=desc&apikey=APIKEY',
  etherscankey: 'RIRQPJ1T7392IDFMI8SJUBZMB95JZHHDEP',
  appPort: 3000,
};
