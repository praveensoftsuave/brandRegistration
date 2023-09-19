import { Component } from "react";

export type InputType = {
    name: string;
    placeholder?: string;
    fieldText?: string;
    helperText?: string;
    rules?: any;
    disabled?: boolean;
}
export type AutoCompleteType = {
    name: string;
    placeholder?: string;
    options: any;
    fieldText?: string;
    helperText?: string;
    rules?: any;
}

export type CheckboxType = {
    name: string;
    label: string;
    rules?: any;
}
export type TableType = {
    data: {
        header: Array<string>;
        row: any
    }
}

export type FooterProps = {
    activeStep: number;
    steps: Array<string>;
    prevClick: () => void;
    nextType: 'submit' | 'button';
    nextClick?: () => void;
    disableNext?: boolean
}

export type BrandRegistrationProps = {
    activeStep: number;
    setActiveStep: (e: number) => void;
    formData: any;
    setFormData: (e: any) => void;
}

export type AddressAndContactProps = {
    activeStep: number;
    setActiveStep: (e: number) => void;
    formData: any;
    setFormData: (e: any) => void;
}

export type PaymentConfirmationProps = {
    activeStep: number;
    setActiveStep: (e: number) => void;
    isPreview?: boolean;
    allowNext?: boolean;
    setAllowNext?: (e: boolean) => void;
}

export type PreviewComponentProps = {
    activeStep: number;
    setActiveStep: (e: number) => void;
    formData: any;
    setFormData: (e: any) => void;
    toastr: boolean;
    setToastr: (e: boolean) => void;
}


export type DefaultBrandRegistrationType = {
    legalBusinessName: string,
    countryOfRegistration: string,
    federalBusinessId: string,
    vertical: string,
    stockSymbol: string,
    businessType: {
        publiclyTraded: boolean,
        nonProfitOrganization: boolean,
        privateCompany: boolean,
        government: boolean,
    }
}

export type DefaultAddressAndContactType = {
    businessAddress: string,
    cityState: string,
    postalCode: string,
    primaryBusinessPhone: string,
    supportPhoneNumber: string,
    businessWebsite: string,
    supportEmail: string,
}

export type ImageCardType = {
    image: string;
    header: string;
}

export type AccordianType = {
    topic: string;
    content: any;
}