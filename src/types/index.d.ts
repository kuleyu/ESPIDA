import { CreateShopifyProductQuery } from "../types";

export interface resType {
  data?: CreateShopifyProductQuery;
}

export interface postType {
  handle?: string | null | undefined;
  id: string;
  productType?: string | null | undefined;
}

export type variantType = { id: string; color?: string; image?: any; size?: string };

export type variantsType = Array<
  | {
      id: string;
      price?: string | null | undefined;
      compareAtPrice?: string | null | undefined;
      title?: string | null | undefined;
      image?: { gatsbyImageData: any } | null | undefined;
    }
  | null
  | undefined
>;

export type shopifyProduct = {
  id: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  tags?: Array<string | null | undefined> | null | undefined;
  handle?: string | null | undefined;
  productType?: string | null | undefined;
  publishedAt?: any | null | undefined;
  collections?: Array<{ title?: string | null | undefined } | null | undefined> | null | undefined;
  images?: Array<{ altText?: string | null | undefined; gatsbyImageData: any } | null | undefined> | null | undefined;
  variants?:
    | Array<
        | {
            id: string;
            price?: string | null | undefined;
            compareAtPrice?: string | null | undefined;
            title?: string | null | undefined;
            image?: { gatsbyImageData: any } | null | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};
