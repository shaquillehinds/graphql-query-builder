export enum Parish {
  STLUCY = "STLUCY",
  STPETER = "STPETER",
  STANDREW = "STANDREW",
  STJAMES = "STJAMES",
  STTHOMAS = "STTHOMAS",
  STJOSEPH = "STJOSEPH",
  STJOHN = "STJOHN",
  STGEORGE = "STGEORGE",
  STMICHAEL = "STMICHAEL",
  STPHILIP = "STPHILIP",
  CHRISTCHURCH = "CHRISTCHURCH",
  KINGSTON = "KINGSTON",
  PORTLAND = "PORTLAND",
  STCATHERINE = "STCATHERINE",
  STMARY = "STMARY",
  STANN = "STANN",
  MANCHESTER = "MANCHESTER",
  CLARENDON = "CLARENDON",
  HANOVER = "HANOVER",
  WESTMORELAND = "WESTMORELAND",
  TRELAWNY = "TRELAWNY",
  STELIZABETH = "STELIZABETH",
  ARIMA = "ARIMA",
  PORTOFSPAIN = "PORTOFSPAIN",
  SANFERNANDO = "SANFERNANDO",
  TOBAGO = "TOBAGO",
  CHAGUANAS = "CHAGUANAS",
  COUVA = "COUVA",
  DIEGOMARTIN = "DIEGOMARTIN",
  MAYARO = "MAYARO",
  PENAL = "PENAL",
  POINTFORTIN = "POINTFORTIN",
  PRINCESTOWN = "PRINCESTOWN",
  SANJUAN = "SANJUAN",
  SANGREGRANDE = "SANGREGRANDE",
  SIPARIA = "SIPARIA",
  TUNAPUNA = "TUNAPUNA",
}

export enum Country {
  BB = "BB",
  JM = "JM",
  TT = "TT",
}

export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",
}

export enum SizeTypeInput {
  XXXS = "XXXS",
  XXS = "XXS",
  XS = "XS",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",
}

export enum ConditionInput {
  NEW = "NEW",
  LIKENEW = "LIKENEW",
  NWWT = "NWWT",
  USED = "USED",
}

export enum GenderInput {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Day {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export enum TransactionType {
  PURCHASE = "PURCHASE",
  PAYOUT = "PAYOUT",
  REFUND = "REFUND",
}

export enum PaymentGateway {
  PAYPAL = "PAYPAL",
  BRAINTREE = "BRAINTREE",
  WIPAY = "WIPAY",
  STRIPE = "STRIPE",
  TWOCHECKOUT = "TWOCHECKOUT",
}

export enum ProductStatus {
  PENDINGDELIVERY = "PENDINGDELIVERY",
  PENDINGDROPOFF = "PENDINGDROPOFF",
  PENDINGCOLLECTION = "PENDINGCOLLECTION",
  INSTORE = "INSTORE",
  INTRANSIT = "INTRANSIT",
  DELIVERED = "DELIVERED",
  COLLECTED = "COLLECTED",
  PENDINGREFUND = "PENDINGREFUND",
  REFUNDED = "REFUNDED",
  ORDERCOMPLETE = "ORDERCOMPLETE",
}

export enum Sort {
  ASC = "ASC",
  DESC = "DESC",
}

export enum EnumMap {

  STLUCY = "STLUCY",
  STPETER = "STPETER",
  STANDREW = "STANDREW",
  STJAMES = "STJAMES",
  STTHOMAS = "STTHOMAS",
  STJOSEPH = "STJOSEPH",
  STJOHN = "STJOHN",
  STGEORGE = "STGEORGE",
  STMICHAEL = "STMICHAEL",
  STPHILIP = "STPHILIP",
  CHRISTCHURCH = "CHRISTCHURCH",
  KINGSTON = "KINGSTON",
  PORTLAND = "PORTLAND",
  STCATHERINE = "STCATHERINE",
  STMARY = "STMARY",
  STANN = "STANN",
  MANCHESTER = "MANCHESTER",
  CLARENDON = "CLARENDON",
  HANOVER = "HANOVER",
  WESTMORELAND = "WESTMORELAND",
  TRELAWNY = "TRELAWNY",
  STELIZABETH = "STELIZABETH",
  ARIMA = "ARIMA",
  PORTOFSPAIN = "PORTOFSPAIN",
  SANFERNANDO = "SANFERNANDO",
  TOBAGO = "TOBAGO",
  CHAGUANAS = "CHAGUANAS",
  COUVA = "COUVA",
  DIEGOMARTIN = "DIEGOMARTIN",
  MAYARO = "MAYARO",
  PENAL = "PENAL",
  POINTFORTIN = "POINTFORTIN",
  PRINCESTOWN = "PRINCESTOWN",
  SANJUAN = "SANJUAN",
  SANGREGRANDE = "SANGREGRANDE",
  SIPARIA = "SIPARIA",
  TUNAPUNA = "TUNAPUNA",

  BB = "BB",
  JM = "JM",
  TT = "TT",

  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",

  XXXS = "XXXS",
  XXS = "XXS",
  XS = "XS",
  XL = "XL",
  XXL = "XXL",
  XXXL = "XXXL",

  NEW = "NEW",
  LIKENEW = "LIKENEW",
  NWWT = "NWWT",
  USED = "USED",

  MALE = "MALE",
  FEMALE = "FEMALE",

  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",

  PURCHASE = "PURCHASE",
  PAYOUT = "PAYOUT",
  REFUND = "REFUND",

  PAYPAL = "PAYPAL",
  BRAINTREE = "BRAINTREE",
  WIPAY = "WIPAY",
  STRIPE = "STRIPE",
  TWOCHECKOUT = "TWOCHECKOUT",

  PENDINGDELIVERY = "PENDINGDELIVERY",
  PENDINGDROPOFF = "PENDINGDROPOFF",
  PENDINGCOLLECTION = "PENDINGCOLLECTION",
  INSTORE = "INSTORE",
  INTRANSIT = "INTRANSIT",
  DELIVERED = "DELIVERED",
  COLLECTED = "COLLECTED",
  PENDINGREFUND = "PENDINGREFUND",
  REFUNDED = "REFUNDED",
  ORDERCOMPLETE = "ORDERCOMPLETE",

  ASC = "ASC",
  DESC = "DESC",
}
export type AddressG = {
  firstName: string
  lastName: string
  address: string
  parish: Parish
  country: Country
  city?: string
  postalCode?: string
  latitude?: number
  longitude?: number
}

export type BankAccountG = {
  name: string
  number: string
  bank: string
  details?: string
}

export type PayoutRequestG = {
  active: boolean
  amount: number
}

export type RatingG = {
  total: number
  raters: number
  average: number
}

export type UsersG = {
  _id: string
  admin?: boolean
  username: string
  status: Status
  image: string
  firstName: string
  lastName: string
  email: string
  phone: string
  payoutRequest?: PayoutRequestG
  country: Country
  bankAccount?: BankAccountG
  totalEarnings: number
  balance: number
  availableBalance: number
  listings: number
  sold: number
  rating?: RatingG
  createdAt: number
}

export type UnpopulatedUserG = {
  _id: string
  admin?: boolean
  username: string
  status: Status
  image: string
  firstName: string
  lastName: string
  email: string
  phone: string
  payoutRequest?: PayoutRequestG
  country: Country
  bankAccount?: BankAccountG
  totalEarnings: number
  balance: number
  availableBalance: number
  listings: number
  sold: number
  rating?: RatingG
  createdAt: number
  addresses: AddressG[]
  fcmToken: string
  jwt?: string
  updatedAt: number
  favoriteProducts: string[]
  favoriteSellers: string[]
  cart: string[]
}

export type UserG = {
  _id: string
  admin?: boolean
  username: string
  status: Status
  image: string
  firstName: string
  lastName: string
  email: string
  phone: string
  payoutRequest?: PayoutRequestG
  country: Country
  bankAccount?: BankAccountG
  totalEarnings: number
  balance: number
  availableBalance: number
  listings: number
  sold: number
  rating?: RatingG
  createdAt: number
  addresses: AddressG[]
  fcmToken: string
  jwt?: string
  updatedAt: number
  favoriteProducts: UnpopulatedProductG[]
  favoriteSellers: UserG[]
  cart: UnpopulatedProductG[]
}

export type SizeG = {
  measurement?: number
  type: SizeTypeInput
}

export type ProductG = {
  _id: string
  country: Country
  name: string
  image: string
  images?: string[]
  condition: ConditionInput
  description: string
  category: string
  faults: string
  price: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing: boolean
  material?: string
  size?: SizeG
  gender?: GenderInput
  createdAt: number
  updatedAt: number
  seller: UnpopulatedUserG
}

export type UnpopulatedProductG = {
  _id: string
  country: Country
  name: string
  image: string
  images?: string[]
  condition: ConditionInput
  description: string
  category: string
  faults: string
  price: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing: boolean
  material?: string
  size?: SizeG
  gender?: GenderInput
  createdAt: number
  updatedAt: number
  seller: string
}

export type TimePeriodG = {
  opening: Date
  closing: Date
  days?: Day[]
}

export type BusinessLocationG = {
  firstName: string
  lastName: string
  address: string
  parish: Parish
  country: Country
  city?: string
  postalCode?: string
  latitude?: number
  longitude?: number
  daysAndHours?: TimePeriodG[]
  pickup: boolean
  dropOff: boolean
  phone: string
}

export type DeliveryRateG = {
  parish: Parish
  amount: number
}

export type SettingG = {
  businessLocations: BusinessLocationG[]
  deliveryRates: DeliveryRateG[]
  country: Country
}

export type TransactionG = {
  _id: string
  type: TransactionType
  paymentGateway?: PaymentGateway
  transactionId?: string
  country: Country
  transactionFee?: number
  purchaseTotal?: number
  refundTotal?: number
  payoutTotal?: number
  buyer: UnpopulatedUserG
  products?: UnpopulatedSoldProductG[]
}

export type UnpopulatedTransactionG = {
  _id: string
  type: TransactionType
  paymentGateway?: PaymentGateway
  transactionId?: string
  country: Country
  transactionFee?: number
  purchaseTotal?: number
  refundTotal?: number
  payoutTotal?: number
  buyer: string
  products?: string[]
}

export type SoldProductG = {
  _id: string
  country: Country
  name: string
  image: string
  images?: string[]
  condition: ConditionInput
  description: string
  category: string
  faults: string
  price: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing: boolean
  material?: string
  size?: SizeG
  gender?: GenderInput
  createdAt: number
  updatedAt: number
  seller: UnpopulatedUserG
  status: ProductStatus
  buyer: UnpopulatedUserG
  buyerAddress?: AddressG
  storeAddress?: BusinessLocationG
  deliveredDate?: number
  trackingID?: string
  reviewed?: boolean
  transactions?: UnpopulatedTransactionG[]
}

export type UnpopulatedSoldProductG = {
  _id: string
  country: Country
  name: string
  image: string
  images?: string[]
  condition: ConditionInput
  description: string
  category: string
  faults: string
  price: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing: boolean
  material?: string
  size?: SizeG
  gender?: GenderInput
  createdAt: number
  updatedAt: number
  seller: string
  status: ProductStatus
  buyer: string
  buyerAddress?: AddressG
  storeAddress?: BusinessLocationG
  deliveredDate?: number
  trackingID?: string
  reviewed?: boolean
  transactions?: string[]
}

export type DeleteUserRes = {
  message: string
}

export type InitiateCheckoutResponse = {
  canContinue: boolean
  availableProducts: UnpopulatedProductG[]
  unavailableProducts: UnpopulatedProductG[]
  timeLimit: number
  gatewayUrl?: string
}

export type ReplyG = {
  user: UnpopulatedUserG
  comment: string
}

export type ReviewG = {
  _id: string
  buyer: UnpopulatedUserG
  seller: UnpopulatedUserG
  product: UnpopulatedSoldProductG
  comment?: string
  rating: number
  replies: ReplyG[]
  createdAt: number
  updatedAt: number
}

export type CreateProductInput = {
  country: Country
  name: string
  image: string
  images?: string[]
  condition: ConditionInput
  description?: string
  category: string
  faults?: string
  price: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing?: boolean
  material?: string
  size?: SizeInput
  gender?: GenderInput
  seller: string
}

export type SizeInput = {
  measurement?: number
  type?: SizeTypeInput
}

export type UpdateProductInput = {
  productId: string
  country?: Country
  name?: string
  image?: string
  images?: string[]
  condition?: ConditionInput
  description?: string
  category?: string
  faults?: string
  price?: number
  retailPrice?: number
  brand?: string
  color?: string[]
  isClothing?: boolean
  material?: string
  size?: SizeInput
  gender?: GenderInput
}

export type DeleteProductInput = {
  productId: string
}

export type SoldProductStatusInput = {
  productStatus: ProductStatus
  productId: string
  trackingId?: string
  storeAddress?: BusinessLocationInput
}

export type BusinessLocationInput = {
  firstName: string
  lastName: string
  address: string
  parish: Parish
  country: Country
  city?: string
  postalCode?: string
  latitude?: number
  longitude?: number
  daysAndHours?: TimePeriodInput[]
  pickup?: boolean
  dropOff?: boolean
  phone: string
}

export type TimePeriodInput = {
  opening: Date
  closing: Date
  days?: Day[]
}

export type CreateUserInput = {
  username: string
  image: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: Country
  password: string
  fcmToken?: string
}

export type LoginUserInput = {
  username?: string
  phone?: string
  email?: string
  fcmToken?: string
  password: string
}

export type ResetPasswordInput = {
  phone: string
  password: string
}

export type UpdateUserInput = {
  status?: string
  image?: string
  firstName?: string
  lastName?: string
  email?: string
  country?: Country
  phone?: string
  password?: string
  fcmToken?: string
  addresses?: AddressInput[]
  bankAccount?: BankAccountInput
  payoutRequest?: PayoutRequestInput
}

export type AddressInput = {
  firstName: string
  lastName: string
  address: string
  parish: Parish
  country: Country
  city?: string
  postalCode?: string
  latitude?: number
  longitude?: number
}

export type BankAccountInput = {
  name: string
  number: string
  bank: string
  details?: string
}

export type PayoutRequestInput = {
  active: boolean
  amount: number
}

export type UpdateUserItemInput = {
  favoriteProducts?: string
  favoriteSellers?: string
  cart?: string
}

export type PayoutUserInput = {
  userId: string
}

export type InitiateCheckoutInput = {
  country: Country
  sandbox?: boolean
}

export type PurchaseTransactionInput = {
  country: Country
  address?: AddressInput
  total: string
  transactionFee?: number
  nonce?: string
  transactionID?: string
  sandbox?: boolean
}

export type DeleteTransactionInput = {
  transactionId: string
}

export type CreateSettingInput = {
  businessLocations: BusinessLocationInput[]
  deliveryRates: DeliveryRateInput[]
  country: Country
}

export type DeliveryRateInput = {
  parish: Parish
  amount: number
}

export type UpdateSettingInput = {
  businessLocations?: BusinessLocationInput[]
  deliveryRates?: DeliveryRateInput[]
  country: Country
}

export type CreateReviewInput = {
  sellerId: string
  buyerId: string
  productId: string
  comment?: string
  rating: number
}

export type UpdateReviewInput = {
  reviewId: string
  comment: string
}

export type DeleteReviewInput = {
  reviewId: string
}

