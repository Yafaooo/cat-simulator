const https = require('https');

const newVersion = Date.now().toString();
const data = JSON.stringify(newVersion);

const options = {
  hostname: 'phtc-cat-default-rtdb.firebaseio.com',
  port: 443,
  path: '/config/appVersion.json',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log("Menghubungi server Firebase...");

const req = https.request(options, (res) => {
  if (res.statusCode === 200) {
    console.log(`\n✅ BERHASIL! Layar seluruh peserta telah di-refresh secara paksa!`);
  } else {
    console.log(`\n❌ GAGAL mengirim sinyal. Status Code: ${res.statusCode}`);
  }
});

req.on('error', (error) => {
  console.error('\n❌ ERROR Koneksi Internet:', error);
});

req.write(data);
req.end();
