
export type SizeGFields = {
measurement?: boolean
type?: boolean
}

export type PayoutRequestGFields = {
active?: boolean
amount?: boolean
}

export type BankAccountGFields = {
name?: boolean
number?: boolean
bank?: boolean
details?: boolean
}

export type RatingGFields = {
total?: boolean
raters?: boolean
average?: boolean
}

export type AddressGFields = {
firstName?: boolean
lastName?: boolean
address?: boolean
parish?: boolean
country?: boolean
city?: boolean
postalCode?: boolean
latitude?: boolean
longitude?: boolean
}

export type UnpopulatedUserGFields = {
_id?: boolean
admin?: boolean
username?: boolean
status?: boolean
image?: boolean
firstName?: boolean
lastName?: boolean
email?: boolean
phone?: boolean
payoutRequest?: PayoutRequestGFields
country?: boolean
bankAccount?: BankAccountGFields
totalEarnings?: boolean
balance?: boolean
availableBalance?: boolean
listings?: boolean
sold?: boolean
rating?: RatingGFields
createdAt?: boolean
addresses?: AddressGFields
fcmToken?: boolean
jwt?: boolean
updatedAt?: boolean
favoriteProducts?: boolean
favoriteSellers?: boolean
cart?: boolean
}

export type ProductGFields = {
_id?: boolean
country?: boolean
name?: boolean
image?: boolean
images?: boolean
condition?: boolean
description?: boolean
category?: boolean
faults?: boolean
price?: boolean
retailPrice?: boolean
brand?: boolean
color?: boolean
isClothing?: boolean
material?: boolean
size?: SizeGFields
gender?: boolean
createdAt?: boolean
updatedAt?: boolean
seller?: UnpopulatedUserGFields
}

export type TimePeriodGFields = {
opening?: boolean
closing?: boolean
days?: boolean
}

export type BusinessLocationGFields = {
firstName?: boolean
lastName?: boolean
address?: boolean
parish?: boolean
country?: boolean
city?: boolean
postalCode?: boolean
latitude?: boolean
longitude?: boolean
daysAndHours?: TimePeriodGFields
pickup?: boolean
dropOff?: boolean
phone?: boolean
}

export type UnpopulatedSoldProductGFields = {
_id?: boolean
country?: boolean
name?: boolean
image?: boolean
images?: boolean
condition?: boolean
description?: boolean
category?: boolean
faults?: boolean
price?: boolean
retailPrice?: boolean
brand?: boolean
color?: boolean
isClothing?: boolean
material?: boolean
size?:  SizeGFields
gender?: boolean
createdAt?: boolean
updatedAt?: boolean
seller?: boolean
status?: boolean
buyer?: boolean
buyerAddress?:  AddressGFields
storeAddress?: BusinessLocationGFields
deliveredDate?: boolean
trackingID?: boolean
reviewed?: boolean
transactions?: boolean
}

export type UnpopulatedTransactionGFields = {
_id?: boolean
type?: boolean
paymentGateway?: boolean
transactionId?: boolean
country?: boolean
transactionFee?: boolean
purchaseTotal?: boolean
refundTotal?: boolean
payoutTotal?: boolean
buyer?: boolean
products?: boolean
}

export type SoldProductGFields = {
_id?: boolean
country?: boolean
name?: boolean
image?: boolean
images?: boolean
condition?: boolean
description?: boolean
category?: boolean
faults?: boolean
price?: boolean
retailPrice?: boolean
brand?: boolean
color?: boolean
isClothing?: boolean
material?: boolean
size?:  SizeGFields
gender?: boolean
createdAt?: boolean
updatedAt?: boolean
seller?:  UnpopulatedUserGFields
status?: boolean
buyer?:  UnpopulatedUserGFields
buyerAddress?:  AddressGFields
storeAddress?:  BusinessLocationGFields
deliveredDate?: boolean
trackingID?: boolean
reviewed?: boolean
transactions?: UnpopulatedTransactionGFields
}

export type UnpopulatedProductGFields = {
_id?: boolean
country?: boolean
name?: boolean
image?: boolean
images?: boolean
condition?: boolean
description?: boolean
category?: boolean
faults?: boolean
price?: boolean
retailPrice?: boolean
brand?: boolean
color?: boolean
isClothing?: boolean
material?: boolean
size?:  SizeGFields
gender?: boolean
createdAt?: boolean
updatedAt?: boolean
seller?: boolean
}

export type UserGFields = {
_id?: boolean
admin?: boolean
username?: boolean
status?: boolean
image?: boolean
firstName?: boolean
lastName?: boolean
email?: boolean
phone?: boolean
payoutRequest?:  PayoutRequestGFields
country?: boolean
bankAccount?:  BankAccountGFields
totalEarnings?: boolean
balance?: boolean
availableBalance?: boolean
listings?: boolean
sold?: boolean
rating?:  RatingGFields
createdAt?: boolean
addresses?:  AddressGFields
fcmToken?: boolean
jwt?: boolean
updatedAt?: boolean
favoriteProducts?: UnpopulatedProductGFields
cart?:  UnpopulatedProductGFields
favoriteSellers?: {
_id?: boolean
admin?: boolean
username?: boolean
status?: boolean
image?: boolean
firstName?: boolean
lastName?: boolean
email?: boolean
phone?: boolean
payoutRequest?:  PayoutRequestGFields
country?: boolean
bankAccount?:  BankAccountGFields
totalEarnings?: boolean
balance?: boolean
availableBalance?: boolean
listings?: boolean
sold?: boolean
rating?:  RatingGFields
createdAt?: boolean
addresses?:  AddressGFields
fcmToken?: boolean
jwt?: boolean
updatedAt?: boolean
favoriteProducts?: UnpopulatedProductGFields
cart?:  UnpopulatedProductGFields
}
}

export type DeleteUserResFields = {
message?: boolean
}

export type InitiateCheckoutResponseFields = {
canContinue?: boolean
availableProducts?:  UnpopulatedProductGFields
unavailableProducts?:  UnpopulatedProductGFields
timeLimit?: boolean
gatewayUrl?: boolean
}

export type DeliveryRateGFields = {
parish?: boolean
amount?: boolean
}

export type SettingGFields = {
businessLocations?:  BusinessLocationGFields
deliveryRates?: DeliveryRateGFields
country?: boolean
}

export type ReplyGFields = {
user?:  UnpopulatedUserGFields
comment?: boolean
}

export type ReviewGFields = {
_id?: boolean
buyer?:  UnpopulatedUserGFields
seller?:  UnpopulatedUserGFields
product?:  UnpopulatedSoldProductGFields
comment?: boolean
rating?: boolean
replies?: ReplyGFields
createdAt?: boolean
updatedAt?: boolean
}

export type UsersGFields = {
_id?: boolean
admin?: boolean
username?: boolean
status?: boolean
image?: boolean
firstName?: boolean
lastName?: boolean
email?: boolean
phone?: boolean
payoutRequest?:  PayoutRequestGFields
country?: boolean
bankAccount?:  BankAccountGFields
totalEarnings?: boolean
balance?: boolean
availableBalance?: boolean
listings?: boolean
sold?: boolean
rating?:  RatingGFields
createdAt?: boolean
}

export type TransactionGFields = {
_id?: boolean
type?: boolean
paymentGateway?: boolean
transactionId?: boolean
country?: boolean
transactionFee?: boolean
purchaseTotal?: boolean
refundTotal?: boolean
payoutTotal?: boolean
buyer?:  UnpopulatedUserGFields
products?:  UnpopulatedSoldProductGFields
}
