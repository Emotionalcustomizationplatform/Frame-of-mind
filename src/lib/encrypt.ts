// src/lib/encrypt.ts
import crypto from "crypto";
const KEY = Buffer.from(process.env.MESSAGE_ENCRYPTION_KEY_BASE64!, "base64");
if (!KEY || KEY.length !== 32) {
  throw new Error("MESSAGE_ENCRYPTION_KEY_BASE64 must be a base64-encoded 32 bytes key");
}
export function encrypt(plain: string) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", KEY, iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, enc]).toString("base64");
}
export function decrypt(cipherB64: string) {
  const data = Buffer.from(cipherB64, "base64");
  const iv = data.slice(0, 12);
  const tag = data.slice(12, 28);
  const enc = data.slice(28);
  const decipher = crypto.createDecipheriv("aes-256-gcm", KEY, iv);
  decipher.setAuthTag(tag);
  const out = Buffer.concat([decipher.update(enc), decipher.final()]);
  return out.toString("utf8");
}