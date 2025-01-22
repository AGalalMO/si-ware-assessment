import { Dimension } from "../../../types/dimension";
import { Product } from "../../../types/product";

export type handleValueChangeType = (
  key: keyof Product,
  value: string | number,
  nestedKey?: keyof Dimension
) => void;
