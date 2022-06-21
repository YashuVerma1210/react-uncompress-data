import axios from 'axios';
import { inflate } from 'pako';

export const getData = async () => {
  const response = await axios.get(
    'https://raw.githubusercontent.com/NazarHarashchak/MobileBanking/9155a04a3ff064167537a7c32f9cca356a5c3ab4/FrontEnd/node_modules/.cache/eslint-loader/b3fa51dc9159babf532b97696dacb328bf0a70dc.json.gz',
    { responseType: 'blob' }
  );

  const dataArrayBuffer = await response.data.arrayBuffer();

  console.log('input size: ', dataArrayBuffer.byteLength);

  // const output = inflate(dataArrayBuffer, { to: 'string' });

  const output = inflate(dataArrayBuffer);

  console.log('output size: ', output.byteLength);

  const str = new TextDecoder().decode(output);

  console.log('json object', JSON.parse(str));

  // console.log(str);
};
