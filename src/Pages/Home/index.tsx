import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import BrandRegistration from '../BrandRegistration';
import { steps } from '../../Utils/common';
import AddressAndContact from '../AddressAndContact';
import PaymentConfirmation from '../PaymentConfirmation';
import PreviewComponent from '../PreviewComponent';
import './style.scss';

const Home: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [formData, setFormData] = useState({})
    const [allowNext, setAllowNext] = useState<boolean>(false);
    const [toastr, setToastr] = useState<boolean>(false);

    const renderPage = (step: number) => {
        switch (step) {
            case 0:
                return (<Box>
                    <BrandRegistration activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData} />
                </Box>)
            case 1:
                return (<Box sx={{ width: '100%' }}>
                    <AddressAndContact activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData} />
                </Box>)
            case 2:
                return (<Box sx={{ width: '100%' }}>
                    <PaymentConfirmation activeStep={activeStep} setActiveStep={setActiveStep} allowNext={allowNext} setAllowNext={setAllowNext} />
                </Box>)
            case 3:
                return (<Box sx={{ width: '100%' }}>
                    <PreviewComponent activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData} toastr={toastr} setToastr={setToastr} />
                </Box>)
            default:
                return 'Unknown step'
        }
    }


    return (
        <Box className='box-container'>
            <Stepper className='brand-stepper-container' activeStep={activeStep}>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
            <React.Fragment>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    {renderPage(activeStep)}
                </Box>
            </React.Fragment>
        </Box>
    );
}

export default Home;