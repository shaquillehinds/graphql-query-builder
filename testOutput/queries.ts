import {
  CreateProductInput,
  ProductG,
  UpdateProductInput,
  DeleteProductInput,
  UnpopulatedSoldProductG,
  SoldProductStatusInput,
  SoldProductG,
  CreateUserInput,
  UserG,
  LoginUserInput,
  UnpopulatedUserG,
  ResetPasswordInput,
  UpdateUserInput,
  UpdateUserItemInput,
  PayoutUserInput,
  PayoutRequestG,
  DeleteUserRes,
  InitiateCheckoutInput,
  InitiateCheckoutResponse,
  PurchaseTransactionInput,
  UnpopulatedTransactionG,
  DeleteTransactionInput,
  CreateSettingInput,
  SettingG,
  UpdateSettingInput,
  CreateReviewInput,
  ReviewG,
  UpdateReviewInput,
  DeleteReviewInput,
  Country,
  ConditionInput,
  SizeTypeInput,
  Sort,
  UnpopulatedProductG,
  ProductStatus,
  Status,
  UsersG,
  TransactionG,
} from "./types";

import {
  SizeGFields,
  PayoutRequestGFields,
  BankAccountGFields,
  RatingGFields,
  AddressGFields,
  UnpopulatedUserGFields,
  ProductGFields,
  TimePeriodGFields,
  BusinessLocationGFields,
  UnpopulatedSoldProductGFields,
  UnpopulatedTransactionGFields,
  SoldProductGFields,
  UnpopulatedProductGFields,
  UserGFields,
  DeleteUserResFields,
  InitiateCheckoutResponseFields,
  DeliveryRateGFields,
  SettingGFields,
  ReplyGFields,
  ReviewGFields,
  UsersGFields,
  TransactionGFields,
} from "./returnFields";

export type Queries = {
  products?: {
    args: {
      country: Country;
      search?: string;
      userId?: string;
      condition?: ConditionInput;
      category?: string;
      minPrice?: number;
      maxPrice?: number;
      minMeasurement?: number;
      maxMeasurement?: number;
      color?: string;
      size?: SizeTypeInput;
      limit?: number;
      skip?: number;
      sortPrice?: Sort;
      sortCreated?: Sort;
      sortRelevance?: boolean;
    };
    returns: UnpopulatedProductGFields;
  };
  product?: {
    args: {
      productId: string;
    };
    returns: ProductGFields;
  };
  soldProduct?: {
    args: {
      productId: string;
    };
    returns: SoldProductGFields;
  };
  soldProducts?: {
    args: {
      country?: Country;
      sellerId?: string;
      buyerId?: string;
      status?: ProductStatus[];
      reviewed?: boolean;
      limit?: number;
      skip?: number;
      sortCreated?: Sort;
    };
    returns: UnpopulatedSoldProductGFields;
  };
  validateUser?: {
    args: {
      country?: Country;
    };
    returns: UserGFields;
  };
  unpopulatedUserById?: {
    args: {
      userId: string;
      country?: Country;
      populate?: boolean;
      skip?: number;
      limit?: number;
      cartItems?: boolean;
      favoriteProducts?: boolean;
      favoriteSellers?: boolean;
    };
    returns: UnpopulatedUserGFields;
  };
  availability?: {
    args: {
      username?: string;
      phone?: string;
      email?: string;
    };
    returns: string;
  };
  userById?: {
    args: {
      userId: string;
      country?: Country;
      populate?: boolean;
      skip?: number;
      limit?: number;
      cartItems?: boolean;
      favoriteProducts?: boolean;
      favoriteSellers?: boolean;
    };
    returns: UserGFields;
  };
  user?: {
    args: {
      username?: string;
      email?: string;
      phone?: string;
      populate?: boolean;
    };
    returns: UserGFields;
  };
  users?: {
    args: {
      country: Country;
      payoutRequest?: boolean;
      status?: Status;
      limit?: number;
      skip?: number;
    };
    returns: UsersGFields;
  };
  unpopulatedUser?: {
    args: {
      username?: string;
      email?: string;
      phone?: string;
      populate?: boolean;
    };
    returns: UnpopulatedUserGFields;
  };
  transaction?: {
    args: {
      transactionId: string;
    };
    returns: TransactionGFields;
  };
  setting?: {
    args: {
      country: Country;
    };
    returns: SettingGFields;
  };
  review?: {
    args: {
      reviewId: string;
    };
    returns: ReviewGFields;
  };
  reviews?: {
    args: {
      limit?: number;
      skip?: number;
      sort?: number;
      sellerId?: string;
      buyerId?: string;
    };
    returns: ReviewGFields;
  };
};
export type QueriesMap = {
  products: UnpopulatedProductG[];
  product: ProductG | null;
  soldProduct: SoldProductG | null;
  soldProducts: UnpopulatedSoldProductG[];
  validateUser: UserG;
  unpopulatedUserById: UnpopulatedUserG | null;
  availability: string;
  userById: UserG | null;
  user: UserG | null;
  users: UsersG[];
  unpopulatedUser: UnpopulatedUserG | null;
  transaction: TransactionG | null;
  setting: SettingG | null;
  review: ReviewG;
  reviews: ReviewG[];
};
