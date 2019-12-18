var crypto = require('crypto');

const data = '我不是笨蛋';
const password = 'zstd';

const aseEncode = function(data,password) {
  const cipher = crypto.createCipher('aes192',password);
  let crypted = cipher.update(data,'utf-8','hex');
  crypted += cipher.final('hex');
  return crypted;
}

//console.log(aseEncode(data,password));

const aseDecode = function(data,password) {
  const decipher = crypto.createDecipher('aes192',password);
  let decrypted = decipher.update(data,'hex','utf-8');
  decrypted += decipher.final('utf-8');


  return decrypted;
}

//console.log(aseDecode(aseEncode(data,password),password));
module.exports = {
  aseEncode:aseEncode,
  aseDecode:aseDecode
}
