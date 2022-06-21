import { inflate } from 'pako';

export const urls = [
  'https://raw.githubusercontent.com/NazarHarashchak/MobileBanking/9155a04a3ff064167537a7c32f9cca356a5c3ab4/FrontEnd/node_modules/.cache/eslint-loader/b3fa51dc9159babf532b97696dacb328bf0a70dc.json.gz',
  'https://raw.githubusercontent.com/mongodb-university/mflix-python/d9667e709bd400f3d3dbd6e7f1474b3702d9d5fa/data/mflix/comments.metadata.json.gz',
];

export async function exec(i = 0) {
  console.group('file: ', i);
  try {
    // fetch file with CORS enabled
    const res = await fetch(urls[i], {
      mode: 'cors',
    });
    // convert to arrayBuffer for further processing
    const buf = await res.arrayBuffer();
    // or get blob using `await res.blob()`
    // and convert blob to arrayBuffer using `await blob.arrayBuffer()`

    console.log('input size: ', buf.byteLength);

    // decompress file
    const outBuf = inflate(buf);
    console.log('output size: ', outBuf.byteLength);

    // convert arrayBuffer to string
    const str = new TextDecoder().decode(outBuf);
    // console.log('json string', str);

    // print json object
    console.log('json object', JSON.parse(str));
  } catch (err) {
    console.error('unable to decompress', err);
  }
  console.groupEnd('file: ', i);
}

export async function init() {
  for (let i in urls) await exec(i);
}
