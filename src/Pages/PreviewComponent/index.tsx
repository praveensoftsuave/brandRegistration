import { FC, useState } from 'react';
import Accordian from '../../Component/Accordian';
import { PreviewComponentProps } from '../../Utils/interface';
import { formatFieldName, steps } from '../../Utils/common';
import { isString } from 'lodash';
import Footer from '../../Component/Footer';
import PaymentConfirmation from '../PaymentConfirmation';
import { Alert, Snackbar } from "@mui/material";

const PreviewComponent: FC<PreviewComponentProps> = ({ activeStep, formData, setActiveStep, setFormData, setToastr, toastr }) => {

    const selectComponent = (type: string) => {
        switch (type) {
            case 'brandRegistration':
                const brandRegistrationData = Object.entries(formData.brandRegistration)
                const BusinessType = Object.keys(formData?.brandRegistration?.businessType || {}).map((businessType, index) => { return formData?.brandRegistration?.businessType[businessType] && businessType })
                const businessTypeString = BusinessType.filter((business) => business)?.join('')

                return (
                    <div className='payment-details-list'>
                        {brandRegistrationData?.map((brandRegistration: any) => {
                            return (
                                brandRegistration[1] && <div>{formatFieldName(brandRegistration[0])}: <span>{isString(brandRegistration[1]) ?
                                    brandRegistration[1] : Object.keys(brandRegistration[1]).includes('value') ?
                                        brandRegistration[1].value : brandRegistration[0] === 'businessType' ? businessTypeString : ""}</span></div>
                            )
                        })}
                    </div>
                )
            case 'addressScreen':
                const addressAndContactData = Object.entries(formData.addressAndContact)
                return (
                    <div className='payment-details-list'>
                        {addressAndContactData?.map((addressAndContact: any) => addressAndContact[1] && <div>{formatFieldName(addressAndContact[0] || "")}:<span>{addressAndContact[1]}</span></div>)}
                    </div>
                )
            case 'confirmScreen':
                return (
                    <div>
                        <PaymentConfirmation activeStep={activeStep} setActiveStep={setActiveStep} isPreview={true} />
                    </div>
                )
        }
    }

    return (
        <div className='PreviewComponent-container PaymentConfirmation-container'>
            <Accordian topic='Business Details' content={selectComponent('brandRegistration')} />
            <Accordian topic='Business Address' content={selectComponent('addressScreen')} />
            <Accordian topic='Invoice Details' content={selectComponent('confirmScreen')} />
            <Footer steps={steps} activeStep={activeStep} prevClick={() => setActiveStep(activeStep - 1)} nextType='button' nextClick={() => { setToastr(true); setFormData({}); setActiveStep(0) }} />
            <Snackbar
                open={toastr}
                autoHideDuration={3000}
                onClose={() => setToastr(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert
                    variant="standard"
                    onClose={() => setToastr(false)}
                    severity="success"
                >
                    Submitted Successfully
                </Alert>
            </Snackbar>
        </div>
    )
}

export default PreviewComponent