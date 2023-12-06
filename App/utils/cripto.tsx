import crypto from 'crypto';

const base64UrlEncode = (input: Uint8Array): string => {
  const base64: string = btoa(String.fromCharCode.apply(null, Array.from(input)));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const codeVerifier: string = base64UrlEncode(crypto.randomBytes(32));

export const codeChallenge: string = base64UrlEncode(
  crypto.createHash('sha256').update(codeVerifier).digest(),
);