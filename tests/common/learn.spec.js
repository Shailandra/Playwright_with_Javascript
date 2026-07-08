import fs from 'fs';

test('decode xml', async () => {
  const base64Data = ''

  const xmlContent = Buffer.from(base64Data, 'base64').toString('utf8');

  fs.writeFileSync('./tests/common/1.xml', xmlContent);

  console.log(xmlContent);
});