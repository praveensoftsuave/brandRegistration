import { FC, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import ImageCard from '../../Component/ImageCard';
import businessImage from '../../Assets/business.jpg';
import Input from '../../Component/Input';
import AutoComplete from '../../Component/AutoComplete';
import { countryList, businessVertical, steps } from '../../Utils/common';
import { DefaultBrandRegistration } from '../../Utils/DefaultValues';
import CustomCheckbox from '../../Component/Checkbox';
import './style.scss';
import { BrandRegistrationProps } from '../../Utils/interface';
import Footer from '../../Component/Footer';

const BrandRegistration: FC<BrandRegistrationProps> = ({ activeStep, setActiveStep, formData, setFormData }) => {
    const methods = useForm({
        defaultValues: DefaultBrandRegistration
    })
    const { getValues, watch, formState: { errors } } = methods
    const [countries, setCountries] = useState<Array<{ label: string, value: string }>>([])

    const handleSubmit = (data: any) => {
        setFormData({ ...formData, brandRegistration: data })
        setActiveStep(activeStep + 1);
    }
    const prevClick = () => {
        setActiveStep(activeStep - 1);
    }

    useEffect(() => {
        if (!countries.length) {
            setCountries(countryList.map((country) => {
                return { label: country.name, value: country.name }
            }))
        }
        if (formData?.brandRegistration) {
            methods.reset({ ...formData?.brandRegistration })
        }
    }, [])

    return (
        <FormProvider {...methods}>
            <div className='brand-registration-container'>
                <div className='brand-image-container'>
                    <ImageCard header='Brand Registration' image={businessImage} />
                    <Alert severity="error">{`Please make sure your business name and federal business ID (EIN for US businesses, Corporation Number for Canadian registered businesses) match exactly. Mismatches (even minor) will result in immediate rejection`}</Alert>
                </div>
                <form onSubmit={methods.handleSubmit(data => handleSubmit(data))} className='brand-registration-form-container'>
                    <div className='brand-registration-form'>
                        <div>
                            <Input
                                name='legalBusinessName'
                                fieldText='Legal business name'
                                helperText='(Please make sure your business name matches with IRS records)'
                                placeholder='Enter Legal Business Name'
                                rules={{
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9\s]+$/,
                                        message: 'Please enter a valid business name'
                                    }
                                }}
                            />
                            <AutoComplete
                                name='countryOfRegistration'
                                fieldText='Country of registration'
                                helperText=''
                                placeholder='Enter Country of Registration'
                                rules={{
                                    required: 'This field is required',
                                }}
                                options={countries}
                            />
                        </div>
                        <div>

                            <Input
                                name='federalBusinessId'
                                fieldText='Federal business ID'
                                helperText='(EIN for US, Corporation # for CA)'
                                placeholder='Enter Federal business ID'
                                rules={{
                                    required: 'This field is required',
                                }}
                            />

                            <AutoComplete
                                name='vertical'
                                fieldText='Vertical'
                                helperText='Select one'
                                placeholder='Select Vertical'
                                rules={{
                                    required: 'This field is required',
                                }}
                                options={businessVertical}
                            />
                        </div>
                        <div>
                            <Input
                                name='stockSymbol'
                                fieldText='Stock symbol'
                                helperText='(*For publicly traded company only)'
                                placeholder='Enter Stock symbol'
                                rules={{
                                    validate: (value: string) => {
                                        if (watch('businessType').publiclyTraded) {
                                            if (!value) {
                                                return 'This field is required';
                                            }
                                        }
                                    }
                                }}
                            />
                            <div className='checkbox-container-main'>
                                <div className='input-labels'>
                                    <div>Business type{<span className="required">*</span>}:</div>
                                    <span>(Select business type you own)</span>
                                </div>
                                <div className='checkboxes-container'>
                                    <CustomCheckbox
                                        name='businessType.publiclyTraded'
                                        label='Publicly Traded Company'
                                    />
                                    <CustomCheckbox
                                        name='businessType.nonProfitOrganization'
                                        label='Non Profit Organization'
                                    />
                                    <CustomCheckbox
                                        name='businessType.privateCompany'
                                        label='Private Company'
                                    />
                                    <CustomCheckbox
                                        name='businessType.government'
                                        label='Government'
                                        rules={{
                                            validate: () => {
                                                if (!Object.values(getValues('businessType') || {}).includes(true)) {
                                                    return 'This field is required';
                                                }
                                            }
                                        }}
                                    />
                                    {Object.keys(errors).includes('businessType') && (
                                        <span className="dsm-inputbox-error-msg inline-error-msg">This field is required</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer activeStep={activeStep} steps={steps} prevClick={prevClick} nextType='submit' />
                </form>
            </div>
        </FormProvider>
    )
}

export default BrandRegistration