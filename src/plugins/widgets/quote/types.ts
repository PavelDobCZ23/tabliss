import { API } from "../../types";

export type Quote = {
  author?: string;
  quote: string;
  timestamp: number;
};

type Data = {
  category?: string;
  apiKey?: string;
};

type Cache = Quote;

export type Props = API<Data, Cache>;

export const defaultData: Data = {
  category: "inspire",
  apiKey: "none by default"
};
