const request = require('request-promise');
const { to } = require('await-to-js');
const BigNumber = require('bignumber.js');

const { etherscanurl, etherscankey } = require('./config');

const Wei = new BigNumber(10**-18); // 1 wei = 10**-18 ether

async function getTransactions(address) {
  const url = etherscanurl.replace('APIKEY', etherscankey).replace('ADDRESS', address); // descending order
  const [err, requestData] = await to(request.get(url));
  if (err) throw new Error('Error sending request.');

  const transactions = JSON.parse(requestData).result;
  transactions.forEach((transaction) => {
    const value = new BigNumber(transaction.value).multipliedBy(Wei);
    console.log(value.toString());
  });
}


getTransactions('0x0Ae2F13f8E0C1Aa44D978bFEb26c2ca789FAA356');
