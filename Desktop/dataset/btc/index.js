/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './shim';
import axios from 'axios';
// import bitcoin from 'rn-bitcoinjs-lib';
import {testnet} from 'bitcoinjs-lib/src/networks';
const bitcoin = require('rn-bitcoinjs-lib');
import crypto from 'react-native-crypto';
// const keyPair = bitcoin.ECPair.makeRandom();
// const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey});
// console.log(address);

// const network = bitcoin.networks.bitcoin;
// or use testnet for testing
// const privateKey = '3Pt18MsNrUrudnCuRvgQg2YJ8pMwpVUQEi';
// Replace with your actual private key
// const keyPair = bitcoin.ECPair.fromWIF(privateKey, network);
// const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey, network});

// const network = bitcoin.networks.bitcoin; // or use testnet for testing
// const keyPair = bitcoin.ECPair.makeRandom({network});
// const {publicKey} = keyPair;
// const {address} = bitcoin.payments.p2pkh({pubkey: publicKey, network});
// console.log(address)

// const apiUrl = `https://api.blockchain.info/balance?active=${address}`;
// axios
//   .get(apiUrl)
//   .then(response => {
//     const balanceInSatoshis = response.data[address].final_balance;
//     const balanceInBTC = balanceInSatoshis / 1e8; // Convert satoshis to BTC
//     console.log(`Balance: ${balanceInBTC} BTC`);
//     console.log(response);
//   })
//   .catch(error => {
//     console.error('Error retrieving balance:', error);
//   });

// const Mnemonic = require('bitcore-mnemonic');

// const mnemonic = new Mnemonic();
// const words = mnemonic.toString();
// console.log(mnemonic);
// console.log(words);
// const keyPair = bitcoin.ECPair.makeRandom({network});
const bitcore = require('bitcore-lib');
const bit = require('bitcoinjs-lib');

// console.log('public Key');
// console.log(keyPair.publicKey.toString());
// console.log('-----------------');
// console.log(keyPair.privateKey);
// console.log('Private Key');

// const privateKey = keyPair.toWIF();

// const {address, network} = bitcoin.payments.p2pkh({
//   pubkey: keyPair.publicKey,
//   network1,
// });
// console.log('Address and Network');
// console.log(privateKey);
// console.log(address);
// console.log('Address and Network');

// const address = '2N3oefVeg6stiTb5Kh3ozCSkaqmx91FDbsm';
// const apiUrl = `https://blockchain.info/rawaddr/${address}`;
// axios
//   .get(apiUrl)
//   .then(response => {
//     const transactions = response.data;
//     console.log('Transaction History:');
//     console.log(transactions);
// transactions.map(transaction => {
//   console.log(`Transaction ID: ${transaction.hash}`);
//   console.log(`Confirmations: ${transaction.confirmations}`);
//   console.log(`Value: ${transaction.value} satoshis`);
//   console.log('-------------------------');
// });
//   })
//   .catch(error => {
//     console.error('Error retrieving transaction history:', error);
//   });

// Replace with the actual Bitcoin address

// const apiUrl = `https://blockchain.info/q/addressbalance/${address}`;
// axios
//   .get(apiUrl)
//   .then(response => {
//     const balanceInSatoshis = response.data;
//     const balanceInBTC = balanceInSatoshis / 1e8; // Convert satoshis to BTC
//     console.log(`Address: ${address}, Balance: ${balanceInBTC} BTC`);
//   })
//   .catch(error => {
//     console.error('Error retrieving balance:', error);
//   });

// const network = bitcoin.networks.bitcoin;
// const keyPair = bitcoin.ECPair.makeRandom({network});
// const privateKey = keyPair.toWIF();

// const randomBytes = CryptoJS.randomBytes(16);
// const mnemonic = CryptoJS.enc.Hex.stringify(randomBytes);
// console.log(privateKey);

// Private Key
// KyJ4MqDnn4vzPaHfepRoW6hsJNM8Tt62FkdtEjbFPkZgF7ZSTAtP
// Address:14dEuJq5AB1uj5MsXY8APkzjtZhCNvs7kU
// Public Key: 03a30cbbd7c43403c99d3981fba4b7aab32414b964a30624776b55ac1aff219f59

// const network = bitcoin.networks.bitcoin;
// const newprivateKey = 'KyJ4MqDnn4vzPaHfepRoW6hsJNM8Tt62FkdtEjbFPkZgF7ZSTAtP';

// const keyPairnew = bitcoin.ECPair.fromWIF(newprivateKey, network);
// const public_key = keyPairnew.publicKey.toString('hex');
// const {address} = bitcoin.payments.p2pkh({
//   pubkey: keyPairnew.publicKey,
//   network,
// });
// const apiUrl = `https://blockchain.info/q/addressbalance/${address}`;
// axios
//   .get(apiUrl)
//   .then(response => {
//     const balanceInSatoshis = response.data;
//     const balanceInBTC = balanceInSatoshis / 1e8; // Convert satoshis to BTC
//     console.log(
//       `Address: ${address}, Balance: ${balanceInBTC} BTC, Public Key ${public_key}`,
//     );
//   })
//   .catch(error => {
//     console.error('Error retrieving balance:', error);
//   });

// Generate Private Public Keys And Address

const CheckBalance = () => {
  // Private Key
  // KyJ4MqDnn4vzPaHfepRoW6hsJNM8Tt62FkdtEjbFPkZgF7ZSTAtP
  // Address:14dEuJq5AB1uj5MsXY8APkzjtZhCNvs7kU
  // Public Key: 03a30cbbd7c43403c99d3981fba4b7aab32414b964a30624776b55ac1aff219f59

  const network = bitcoin.networks.bitcoin;
  const newprivateKey =
    '7accd5f62bd831dc9a1c46d033a59e003f096248b5a8aa8103bdfcd1497aa65c';

  const keyPairnew = bitcoin.ECPair.fromWIF(newprivateKey, network);
  const public_key = keyPairnew.publicKey.toString('hex');
  const {address} = bitcoin.payments.p2pkh({
    pubkey: keyPairnew.publicKey,
  });
  const apiUrl = `https://blockchain.info/q/addressbalance/${mu9dp6hDh1hujCrkUYvnuUzXtGUdBW3NtM}`;
  axios
    .get(apiUrl)
    .then(response => {
      const balanceInSatoshis = response.data;
      const balanceInBTC = balanceInSatoshis / 1e8; // Convert satoshis to BTC
      console.log(
        `Address: ${address}, Balance: ${balanceInBTC} BTC, Public Key ${public_key}`,
      );
    })
    .catch(error => {
      console.error('Error retrieving balance:', error);
    });
};

// CheckBalance();

const generateTestKeys = () => {
  //   const network1 = bitcoin.networks.testnet;
  //   const keyPair = bitcoin.ECPair.makeRandom(network1);
  //   const privateKey = keyPair.toWIF();
  //   console.log(`"Private Key": ${privateKey}`);
  //   const public_key = keyPair.publicKey.toString('hex');
  //   console.log(`"Public Key": ${public_key}`);

  //   const {address, network} = bitcoin.payments.p2pkh({
  //     pubkey: keyPair.publicKey,
  //     testnet,
  //   });
  //   console.log(`"Address": ${address}`);
  //   console.log(`"Network": ${network}`);
  //   const network = bitcoin.networks.testnet;
  //   const keyPair = bitcoin.ECPair.makeRandom({network});

  //   const privateKey = keyPair.privateKey.toString('hex');
  //   const publicKey = keyPair.publicKey.toString('hex');

  //   console.log('Private Key:', privateKey);
  //   console.log('Public Key:', publicKey);

  const privateKey =
    '7accd5f62bd831dc9a1c46d033a59e003f096248b5a8aa8103bdfcd1497aa65c';
  const publicKey =
    '023b4b30bdaf3d4886e64f9f25740db5c8b3cb7ede707c4db6ee819b4ee7fdfe2b';
  const network = bitcoin.networks.testnet;

  const keyPair = bitcoin.ECPair.fromPrivateKey(
    Buffer.from(privateKey, 'hex'),
    {network},
  );

  // Derive the Bitcoin address from the public key
  const {address} = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network,
  });

  console.log('Bitcoin Address:', address);
};

// generateTestKeys();

const checAddressisValid = () => {
  const TestAdd = 'mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt';
  const network1neww = bitcoin.networks.bitcoin;
  const isValidAddress = bitcoin.address.isValid(TestAdd, network1neww);
  console.log(isValidAddress);
};

const Final = () => {
  const network = bitcoin.networks.testnet; // Testnet network

  // Generate a new Testnet key pair
  const keyPair = bitcoin.ECPair.makeRandom({network});

  // Get the private key, public key, and address
  const privateKey = keyPair.privateKey.toString('hex');
  const publicKey = keyPair.publicKey.toString('hex');
  const {address} = bitcoin.payments.p2pkh({
    pubkey: keyPair.publicKey,
    network,
  });

  console.log('Private Key:', privateKey);
  console.log('Public Key:', publicKey);
  console.log('Testnet Address:', address);
};

Final();
// checAddressisValid();

// checkbalancefinal();

// const sendBtc = async () => {
//   const keyPair = bitcoin.ECPair.makeRandom({rng: crypto.randomBytes}).toWIF();
//   const txb = new bitcoin.TransactionBuilder(bitcoin.networks.bitcoin);

//   const fetchUTXOs = async () => {
//     try {
//       const response = await fetch(
//         'https://blockstream.info/testnet/api/utxos',
//       );
//       const data = await response.json();
//       return data.utxos;
//     } catch (error) {
//       console.error('Failed to fetch UTXOs:', error);
//       return [];
//     }
//   };

//   const utxos = await fetchUTXOs();

//   utxos.map(utxo => {
//     txb.addInput(utxo.txid, utxo.vout);
//   });
//   const satoshiamount = 10000;
//   txb.addOutput('mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt', satoshiamount);

//   utxos.map((utxo, index) => {
//     txb.sign(index, bitcoin.ECPair.fromWIF(keyPair));
//   });
//   const tx = txb.build();
//   const txHex = tx.toHex();
//   console.log(txHex);
// };

// sendBtc();

const checkbalancefinal = () => {
  const address = '14dEuJq5AB1uj5MsXY8APkzjtZhCNvs7kU'; // Replace with the Testnet address you want to get the balance for

  // URL of the Esplora API for Testnet
  const apiUrl = 'https://blockstream.info/testnet/api';

  // Fetch balance for the address
  axios
    .get(
      `https://api.blockcypher.com/v1/btc/main/addrs/mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt/balance`,
    )
    .then(response => {
      const balance = response.data;
      console.log('Balance:', balance);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

// checkbalancefinal();

const sendBTC = async () => {
  const network = bitcoin.networks.testnet;
  const privateKeyHex =
    '94560b63d2a25012fd2409480dd52d6b43b5e79b5072d56fc17e44396a5a4ef7';
  // Convert private key to WIF
  const privateKey1 = Buffer.from(privateKeyHex, 'hex');
  const keyPair = bitcoin.ECPair.fromPrivateKey(privateKey1, {network});
  const privateKeyWIF = keyPair.toWIF();

  const publicKey = keyPair.publicKey;

  // Generate the Bitcoin testnet address
  const senderAddress = bitcoin.payments.p2pkh({
    pubkey: publicKey,
    network,
  }).address;

  const recipientAddress = 'mtWUYttUY2ZYhL3MGYpxCeCAANA2ajmNnT';
  const amount = 0.0001;
  const txb = new bitcoin.TransactionBuilder(network);
  const myadd = 'n4cTTb5o2wN6gXejQxW9EZfJqntRLA6Mb9';

  // Fetch sender's UTXOs (Unspent Transaction Outputs)
  const response = await axios.get(
    `https://blockstream.info/testnet/api/address/${senderAddress}/utxo`,
  );
  const utxos = response.data;

  // Calculate the total input amount
  const totalInputAmount = utxos.reduce((total, utxo) => total + utxo.value, 0);

  // Calculate the fee
  const fee = 5000; // Fee in Satoshis

  // Calculate the change amount
  const changeAmount = totalInputAmount - amount * 1e8 - fee;
  console.log('change Amount');
  console.log(changeAmount);

  utxos.forEach(utxo => {
    txb.addInput(utxo.txid, utxo.vout);
  });

  // Add the recipient's address and amount as an output
  txb.addOutput(recipientAddress, amount * 1e8);

  // Add the change output
  // const senderAddress = address;
  if (changeAmount > 0) {
    txb.addOutput(senderAddress, changeAmount);
  }
  const privateKey = bitcoin.ECPair.fromWIF(privateKeyWIF, network);
  utxos.forEach((utxo, index) => {
    txb.sign(index, privateKey);
  });

  // Build the transaction
  const tx = txb.build();

  // Serialize the transaction
  const txHex = tx.toHex();

  // Broadcast the transaction to the Testnet network
  await axios.post(`https://blockstream.info/testnet/api/tx`, txHex);

  console.log('Transaction successfully sent.');
};

// sendBTC();

import {randomBytes} from 'react-native-randombytes';
import {mnemonicToSeedSync} from 'bip39';

const createAdd = () => {
  const mnemonic = bitcoin.ECPair.makeRandom({rng: randomBytes}).mnemonic;

  // Derive the seed from the mnemonic
  const seed = mnemonicToSeedSync(mnemonic);

  // Create a master HDNode
  const masterNode = bitcoin.bip32.fromSeed(seed, bitcoin.networks.testnet);

  // Derive a testnet address
  const testnetNode = masterNode.derivePath("m/44'/1'/0'/0/0");
  const testnetAddress = bitcoin.payments.p2pkh({
    pubkey: testnetNode.publicKey,
    network: bitcoin.networks.testnet,
  }).address;

  // Get the private and public keys
  const privateKey = testnetNode.privateKey.toString('hex');
  const publicKey = testnetNode.publicKey.toString('hex');

  console.log(`Mnemonic: ${mnemonic}`);
  console.log(`Private Key: ${privateKey}`);
  console.log(`Public Key: ${publicKey}`);
  console.log(`Testnet Address: ${testnetAddress}`);
};
// createAdd();

const validateAddress = () => {
  const addressToValidate = 'n4cTTb5o2wN6gXejQxW9EZfJqntRLA6Mb9';

  try {
    // Check if the address is valid and belongs to the testnet network
    const {version} = bitcoin.address.fromBase58Check(addressToValidate);
    const isTestnetAddress =
      version === bitcoin.networks.testnet.pubKeyHash ||
      version === bitcoin.networks.testnet.scriptHash;

    if (isTestnetAddress) {
      console.log('Valid testnet address');
    } else {
      console.log('Not a valid testnet address');
    }
  } catch (error) {
    console.log('Error validating address:', error.message);
  }
};

validateAddress();

const checkBalance1 = async () => {
  const privateKey =
    '94560b63d2a25012fd2409480dd52d6b43b5e79b5072d56fc17e44396a5a4ef7';

  try {
    // Derive the public address from the private key
    const keyPair = bitcoin.ECPair.fromPrivateKey(
      Buffer.from(privateKey, 'hex'),
    );
    const {address} = bitcoin.payments.p2pkh({
      pubkey: keyPair.publicKey,
      network: bitcoin.networks.testnet,
    });

    // Query the balance from a testnet blockchain API (Blockstream Testnet example)
    const response = await axios.get(
      `https://blockstream.info/testnet/api/address/${address}/utxo`,
    );
    const utxos = response.data;

    // Calculate the total balance
    let totalBalance = 0;
    for (const utxo of utxos) {
      totalBalance += utxo.value;
    }

    console.log(`Address: ${address}`);
    console.log(`Balance: ${totalBalance} satoshis`);
  } catch (error) {
    console.log('Error checking balance:', error.message);
  }
};

checkBalance1();

const fetchTransactionHistory = async () => {
  try {
    const response = await axios.get(
      `https://blockstream.info/testnet/api/address/n4cTTb5o2wN6gXejQxW9EZfJqntRLA6Mb9/txs`,
    );
    const transactions = response.data;

    console.log('Transaction History:');
    console.log(transactions);
    transactions.forEach(tx => {
      console.log('Fees:', tx.feer);
      console.log('TxID:', tx.txid);
      console.log('Confirmations:', tx.status.confirmed);
      console.log('Amount:', tx.vout[0].value);
      console.log('----------------------------------');
    });
  } catch (error) {
    console.error('Error fetching transaction history:', error.message);
  }
};

fetchTransactionHistory();

AppRegistry.registerComponent(appName, () => App);
