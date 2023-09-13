export interface IAddToCartPayload {
  readonly _id: string;
  readonly hash_id?: string;
}

export interface IChangeCartQtyPayload {
  readonly _id: string;
  readonly hash_id: string;
  readonly qty: string;
}
