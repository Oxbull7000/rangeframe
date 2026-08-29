"use client";

import { Transaction, VersionedTransaction } from "@solana/web3.js";
import type { Connection } from "@solana/web3.js";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import { decodeTransactionBase64 } from "@/lib/solana/tx-helpers";

export type DecodedTransaction = Transaction | VersionedTransaction;

export function decodePreparedTransaction(encoded: string) {
  return decodeTransactionBase64(encoded);
}

export async function signPreparedTransaction(
  tx: DecodedTransaction,
  signTransaction: NonNullable<WalletContextState["signTransaction"]>
) {
  return signTransaction(tx);
}

export async function broadcastSignedTransaction(connection: Connection, tx: DecodedTransaction) {
  const signature = await connection.sendRawTransaction(tx.serialize(), { skipPreflight: false });
  await connection.confirmTransaction(signature, "confirmed");
  return signature;
}

export function solscanTxUrl(signature: string) {
  return `https://solscan.io/tx/${signature}`;
}
