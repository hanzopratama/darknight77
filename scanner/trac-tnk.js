const axios = require("axios");

/**
 * Scan TRAC TNK Network (TRAC token / OriginTrail)
 * address example: trac1xxxxxxxxxxxx
 */
module.exports = async function scanTRAC_TNK(address) {
  try {
    // Contoh API publik TRAC TNK (OriginTrail)
    // Jika ada API endpoint resmi berbeda, bisa diganti
    const url = `https://api.tnk.origintrail.io/account/${address}`;

    const res = await axios.get(url, { timeout: 10000 });

    if (!res.data) throw new Error("Address not found");

    return `TRAC TNK Network:
Address : ${address}
Balance : ${res.data.balance || 0}
Status  : ${res.data.status || "Unknown"}`;
  } catch (err) {
    return `❌ TRAC TNK Error: ${err.message}`;
  }
};
