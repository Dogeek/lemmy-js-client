// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ListingType } from "./ListingType";
import type { SortType } from "./SortType";

export interface ListCommunities {
  type_?: ListingType;
  sort?: SortType;
  page?: bigint;
  limit?: bigint;
  auth?: string;
}