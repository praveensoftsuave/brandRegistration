import { useForm, FormProvider } from 'react-hook-form';
import businessImage from '../../Assets/business.jpg';
import ImageCard from '../../Component/ImageCard';
import { DefaultAddressContact } from '../../Utils/DefaultValues';
import Input from '../../Component/Input';
import { FC, useEffect } from 'react';
import { AddressAndContactProps } from '../../Utils/interface';
import { steps } from '../../Utils/common';
import Footer from '../../Component/Footer';
import './style.scss'

const AddressAndContact: FC<AddressAndContactProps> = ({ activeStep, setActiveStep, formData, setFormData }) => {
    const methods = useForm({
        defaultValues: DefaultAddressContact
    })

    const handleSubmit = (data: any) => {
        setFormData({ ...formData, addressAndContact: data })
        setActiveStep(activeStep + 1);
    }
    const prevClick = () => {
        setActiveStep(activeStep - 1);
    }

    useEffect(() => {
        if (formData?.addressAndContact) {
            methods.reset({ ...formData?.addressAndContact })
        }
    }, [])

    return (
        <FormProvider {...methods}>
            <div className='address-and-contact-container'>
                <div className='brand-image-container'>
                    <ImageCard header='Address & Contact Details' image={businessImage} />
                </div>
                <form onSubmit={methods.handleSubmit(data => handleSubmit(data))} className='address-and-contact-form-container'>
                    <div className='address-and-contact-form'>
                        <div className='extra-fields'>
                            <Input
                                name='businessAddress'
                                fieldText='Business Address'
                                helperText=''
                                placeholder='Number of Office/Plot/Building'
                                rules={{
                                    required: "This field is required"
                                }}
                            />
                            <Input
                                name='cityState'
                                fieldText=''
                                helperText=''
                                placeholder='Enter City, State'
                                rules={{
                                    required: "This field is required"
                                }}
                            />
                            <Input
                                name='postalCode'
                                fieldText=''
                                helperText=''
                                placeholder='Postal Code'
                                rules={{
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: "Please enter a valid postal code"
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                name='primaryBusinessPhone'
                                fieldText='Primary Business Phone'
                                helperText='(For business verification purposes)'
                                placeholder='Enter Business phone Number'
                                rules={{
                                    required: "This field is required",
                                    pattern: {
                                        value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                                        message: 'Invalid number'
                                    }
                                }}
                            />
                            <Input
                                name='supportPhoneNumber'
                                fieldText='Support phone number'
                                helperText='(Give alternate phone number)'
                                placeholder='Enter support phone Number'
                                rules={
                                    {
                                        pattern: {
                                            value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                                            message: 'Invalid number'
                                        }
                                    }
                                }
                            />
                        </div>
                        <div>
                            <Input
                                name='businessWebsite'
                                fieldText='Business website'
                                helperText=''
                                placeholder='Enter Business website'
                                rules={{
                                    required: "This field is required",
                                    pattern: {
                                        value: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
                                        message: "Invalid URL pattern"
                                    }
                                }}
                            />
                            <Input
                                name='supportEmail'
                                fieldText='Support email'
                                helperText=''
                                placeholder='Enter Email Id'
                                rules={
                                    {
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    }
                                }
                            />
                        </div>
                    </div>
                    <Footer activeStep={activeStep} steps={steps} prevClick={prevClick} nextType='submit' />
                </form>
            </div>
        </FormProvider>
    )
}

export default AddressAndContact