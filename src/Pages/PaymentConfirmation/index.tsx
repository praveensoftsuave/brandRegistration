import Alert from '@mui/material/Alert';
import { FC, useState } from 'react'
import TableComponent from '../../Component/Table';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PaymentConfirmationProps } from '../../Utils/interface';
import Footer from '../../Component/Footer';
import { steps } from '../../Utils/common';
import './style.scss'

const chargesData = {
    header: ['Period', 'Charges & Credits', 'Unit Price', 'Amount', 'Quantity'],
    row: [['One time charge', '10DKC SMS TCR Registration - Standard brand', '$4.00', 1, '$4.00'], ['Charges after Discount and Pro-rates:', "", "", "", "$4.00"]],
}
const taxesData = {
    header: ['Taxes', 'Amount'],
    row: [['State and local taxes (View breakup)', '$0.60'], ['State and local taxes', '$0.60']],
}
const PaymentConfirmation: FC<PaymentConfirmationProps> = ({ activeStep, setActiveStep, isPreview, allowNext, setAllowNext }) => {
    const prevClick = () => {
        setActiveStep(activeStep - 1);
    }
    const handleNextClick = () => {
        setActiveStep(activeStep + 1);
    }

    return (
        <div className='PaymentConfirmation-container'>
            {!isPreview && <header>Brand Registration Payment Confirmation</header>}
            {!isPreview && <Alert severity="error">{`TCR fees are non-refundable and are set by mobile carriers and their registrar. Phone.com is not charging any additional or TCS registration an days a portion of the per-message carrier fees for our customer`}</Alert>}
            <div className='payment-details-wrapper'>
                <TableComponent data={chargesData} />
                <TableComponent data={taxesData} />
                <div className='payment-amout-list'>
                    <div>Charges after Discount and Pro-rates: <span>$4.00</span></div>
                    <div>State and Local taxes <span>$0.60</span></div>
                    <div>Sub total <span>$4.60</span></div>
                    <div>Total charges to Credit Card:<span>$4.60</span></div>
                </div>
            </div>
            {!isPreview && <em>All charges will appear on your statement this wat Phone.com. We'll use this payment method on file for the account. Your payment information is encrypted and processed on a secure server.</em>}
            {!isPreview && <FormControlLabel
                control={<Checkbox onChange={(e) => setAllowNext && setAllowNext(e.target.checked)} defaultChecked={allowNext} />}
                className='payment-checkbox'
                label={`I understand that my use of the service is governed by the Terms of Services or Master Service Agreement, Accepted Use Policy, and SMS Message Policy`}
            />}
            {!isPreview && <Footer activeStep={activeStep} steps={steps} prevClick={prevClick} nextClick={handleNextClick} nextType='button' disableNext={!allowNext} />}
        </div>
    )
}

export default PaymentConfirmation