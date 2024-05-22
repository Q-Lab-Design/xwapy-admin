export const endpoints = {
  login: {
    method: "POST",
    url: "/Login",
  },
  get_overview: {
    method: "GET",
    url: "/GetOverview",
  },
  list_transactions: {
    method: "GET",
    url: (query: string) => `/Transactions${query}`,
  },
  get_sellers: {
    method: "GET",
    url: "/Sellers",
  },
  get_seller_settings: {
    method: "GET",
    url: (query: string) => `/GetSellerSetting/${query}`,
  },
  create_seller: {
    method: "POST",
    url: "/CreateSeller",
  },
  save_seller_settings: {
    method: "POST",
    url: (query: string) => `/SaveSellerSetting/${query}`,
  },
  get_transaction_group: {
    method: "GET",
    url: (query: string) => `/TransactionsGroup/${query}`,
  },
  get_users: {
    method: "GET",
    url: (query: string) => `/Users/${query}`,
  },
  get_user_settings: {
    method: "GET",
    url: (query: string) => `/GetUserSetting/${query}`,
  },
};