import { API } from "../../types";

type Data = {
  displayIp: boolean;
  displayCity: boolean;
  displayCountry: boolean;
};

export type IpData = {
  ip: string;
  city: string;
  country: string;
};

type Cache = IpData;

export type Props = API<Data, Cache>;

export const defaultData: Data = {
  displayIp: false,
  displayCity: true,
  displayCountry: true,
};
