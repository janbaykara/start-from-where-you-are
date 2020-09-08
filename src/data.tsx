// import { request } from 'graphql-request';
import useSWR from "swr";

export const useRequest = <Res extends any = any>(query: string) => {
  return useSWR(query, (query) => fetch(query).then((r) => r.json() as Res));
};
