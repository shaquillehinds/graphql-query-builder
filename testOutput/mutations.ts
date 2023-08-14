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
} from "./types"

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
} from "./returnFields"

export type Mutations = {
createProduct?: {
input: {createProductDto: CreateProductInput
};
returns: ProductGFields 
}
updateProduct?: {
input: {updateProductDto: UpdateProductInput
};
returns:  ProductGFields 
}
deleteProduct?: {
input: {deleteProductDto: DeleteProductInput
};
returns:  ProductGFields 
}
deleteSoldProduct?: {
input: {deleteSoldProductDto: DeleteProductInput
};
returns: UnpopulatedSoldProductGFields 
}
updateSoldProductStatus?: {
input: {soldProductStatusDto: SoldProductStatusInput
};
returns: SoldProductGFields 
}
createUser?: {
input: {createUserDto: CreateUserInput
};
returns: UserGFields 
}
login?: {
input: {loginDto: LoginUserInput
};
returns:  UserGFields 
}
logout?: {
input: {
};
returns:  UnpopulatedUserGFields 
}
resetPassword?: {
input: {resetPasswordDto: ResetPasswordInput
};
returns:  UnpopulatedUserGFields 
}
updateUser?: {
input: {updateUserDto: UpdateUserInput
};
returns:  UnpopulatedUserGFields 
}
addUserItem?: {
input: {addUserItemDto: UpdateUserItemInput
};
returns:  UnpopulatedUserGFields 
}
removeUserItem?: {
input: {removeUserItemDto: UpdateUserItemInput
};
returns:  UnpopulatedUserGFields 
}
payoutUser?: {
input: {payoutUserDto: PayoutUserInput
};
returns:  PayoutRequestGFields 
}
deleteUser?: {
input: {
};
returns: DeleteUserResFields 
}
cancelCheckout?: {
input: {
};
returns: boolean 
}
initiateCheckout?: {
input: {initiateCheckoutDto: InitiateCheckoutInput
};
returns: InitiateCheckoutResponseFields 
}
purchaseTransaction?: {
input: {purchaseTransactionDto: PurchaseTransactionInput
};
returns:  UnpopulatedTransactionGFields 
}
deleteTransaction?: {
input: {deleteTransactionDto: DeleteTransactionInput
};
returns:  UnpopulatedTransactionGFields 
}
createSetting?: {
input: {createSettingDto: CreateSettingInput
};
returns: SettingGFields 
}
updateSetting?: {
input: {updateSettingDto: UpdateSettingInput
};
returns:  SettingGFields 
}
createReview?: {
input: {createReviewDto: CreateReviewInput
};
returns: ReviewGFields 
}
updateReview?: {
input: {updateReviewDto: UpdateReviewInput
};
returns:  ReviewGFields 
}
deleteReview?: {
input: {deleteReviewDto: DeleteReviewInput
};
returns:  ReviewGFields 
}
}
export type MutationsMap = {
createProduct: ProductG;
updateProduct: ProductG;
deleteProduct: ProductG;
deleteSoldProduct: UnpopulatedSoldProductG;
updateSoldProductStatus: SoldProductG;
createUser: UserG;
login: UserG;
logout: UnpopulatedUserG;
resetPassword: UnpopulatedUserG;
updateUser: UnpopulatedUserG;
addUserItem: UnpopulatedUserG;
removeUserItem: UnpopulatedUserG;
payoutUser: PayoutRequestG;
deleteUser: DeleteUserRes;
cancelCheckout: boolean;
initiateCheckout: InitiateCheckoutResponse;
purchaseTransaction: UnpopulatedTransactionG;
deleteTransaction: UnpopulatedTransactionG;
createSetting: SettingG;
updateSetting: SettingG;
createReview: ReviewG;
updateReview: ReviewG;
deleteReview: ReviewG;
}