const axios = require("axios");

module.exports = async function scanTRAC(did) {
  try {
    const res = await axios.post(
      "https://dkg.origintrail.io/dkg/query",
      {
        query: `
        query {
          node(id: "${did}") {
            id
            stake
            reputation
            status
          }
        }
      `,
      }
    );

    return {
      chain: "TRAC Network (OriginTrail)",
      did,
      result: res.data.data.node,
    };
  } catch {
    return {
      chain: "TRAC Network (OriginTrail)",
      did,
      error: "Invalid DID or node not found",
    };
  }
};
