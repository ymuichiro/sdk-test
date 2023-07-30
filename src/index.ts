import sdk from "symbol-sdk";

const facade = new sdk.facade.SymbolFacade(sdk.symbol.Network.TESTNET);
const keyPair = new sdk.symbol.KeyPair(sdk.PrivateKey.random());

const tx = facade.transactionFactory.create({
  type: "transfer_transaction_v1",
  signerPublicKey: keyPair.publicKey.toString(),
  fee: 1000000n,
  deadline: 41998024783n,
  recipientAddress: "TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I",
  mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
});

const signature = facade.signTransaction(keyPair, tx);

console.log(signature.toString());
