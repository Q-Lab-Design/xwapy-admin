import {
  makeAuthorizedRequestWithHeadersAndPayload,
  makeUnauthorizedRequestWithHeadersAndPayload,
} from ".";
import { endpoints } from "./endpoints";
import * as tp from "./types";

export const requests = {
  login(data: tp.LoginRequestBodyType): Promise<tp.LoginResponseType> {
    const { method, url } = endpoints.login;
    return makeUnauthorizedRequestWithHeadersAndPayload(method, url, data);
  },

  getOverview(): Promise<tp.GetOverviewResponseType> {
    const { method, url } = endpoints.get_overview;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },

  listTransactions(
    data: tp.ListTransactionsRequestType
  ): Promise<tp.ListTransactionsResponseType> {
    const { method, url } = endpoints.list_transactions;

    const query = queryHandler({ ...data });

    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query));
  },

  getResellers(): Promise<tp.GetResellersResponseType> {
    const { method, url } = endpoints.get_sellers;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url);
  },

  getResellerSettings(
    data: tp.GetResellersSettingsRequestType
  ): Promise<tp.GetResellersSettingsResponseType> {
    const { method, url } = endpoints.get_seller_settings;
    const query = queryHandler({ ...data });
    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query));
  },

  createReseller(
    data: tp.CreateResellerRequestType
  ): Promise<tp.CreateResellerResponseType> {
    const { method, url } = endpoints.create_seller;
    return makeAuthorizedRequestWithHeadersAndPayload(method, url, data);
  },

  saveResellerSettiings(
    data: tp.SaveSellerSettingsRequestBodyType,
    queryData: tp.SaveSellerSettingsRequestType
  ): Promise<tp.SaveSellerSettingsResponseType> {
    const { method, url } = endpoints.save_seller_settings;
    const query = queryHandler({ ...queryData });
    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query), data);
  },

  getTransactionsGroup(
    data: tp.GetTransactionGroupRequestType
  ): Promise<tp.GetTransactionGroupResponseType> {
    const { method, url } = endpoints.get_transaction_group;
    const query = queryHandler({ ...data });
    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query));
  },

  getUsers(data: tp.GetUsersRequestType): Promise<tp.GetUsersResponseType> {
    const { method, url } = endpoints.get_users;
    const query = queryHandler({ ...data });
    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query));
  },

  getUserSettings(
    data: tp.GetUsersSettingsRequestType
  ): Promise<tp.GetUsersSettingsResponseType> {
    const { method, url } = endpoints.get_user_settings;
    const query = queryHandler({ ...data });

    return makeAuthorizedRequestWithHeadersAndPayload(method, url(query));
  },
};

const queryHandler = (queryObj: Record<string, any>): string => {
  let query = "";

  const params = Object.keys(queryObj) as Array<keyof typeof queryObj>;

  params.forEach((param) => {
    if (queryObj[param]) {
      if (query.length === 0) {
        query += "?";
      } else {
        query += "&";
      }
      query += `${param}=${queryObj[param]}`;
    }
  });
  return query;
};
