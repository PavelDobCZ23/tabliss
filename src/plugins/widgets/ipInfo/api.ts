import { API } from "../../types";
import { IpData } from "./types";

export async function getIpInfo(loader: API["loader"]): Promise<IpData> {
  loader.push();

  const data = await fetch(
    "https://ipwho.is/",
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  )
    .then((res) => res.json())
    .finally(() => loader.pop());

  return {
    ip: data.ip,
    city: data.city,
    country: data.country,
  };
}
