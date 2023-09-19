import { DefaultBrandRegistrationType } from "./interface"

export const DefaultBrandRegistration: DefaultBrandRegistrationType = {
    legalBusinessName: "",
    countryOfRegistration: "",
    federalBusinessId: "",
    vertical: "",
    stockSymbol: "",
    businessType: {
        publiclyTraded: false,
        nonProfitOrganization: false,
        privateCompany: false,
        government: false,
    }
}
export const DefaultAddressContact: any = {
    businessAddress: "",
    cityState: "",
    postalCode: "",
    primaryBusinessPhone: "",
    supportPhoneNumber: "",
    businessWebsite: "",
    supportEmail: "",
}