import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

const connector = new ElasticsearchAPIConnector({
  host: "https://rarebay.xyz",
  index: "",
  apiKey: "essu_TVU5V0xWSTBkMEoxUzI1SFJESlRjMVJLYjJNNlpHa3liMDFwYTFkUlltbFdjVXhzWjFSNVUzbFZkdz09AAAAAENHzCE="
});

export default async function handler(req, res) {
  const { requestState, queryConfig } = req.body;
  const response = await connector.onAutocomplete(requestState, queryConfig);
  res.json(response);
}
