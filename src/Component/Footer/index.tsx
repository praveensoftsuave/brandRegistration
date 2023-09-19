import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC } from 'react';
import { FooterProps } from '../../Utils/interface';
import nextIcon from '../../Assets/nextIcon.svg'
import previousIcon from '../../Assets/previousIcon.svg'
import previewIcon from '../../Assets/previewIcon.svg'

const Footer: FC<FooterProps> = ({ activeStep, steps, prevClick, nextClick, nextType, disableNext }) => {
    return (
        <div className='footer-container'>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {activeStep !== 0 && <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={prevClick}
                    sx={{ mr: 1 }}
                >
                    <img src={previousIcon} alt="" />  Back
                </Button>}
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    onClick={nextClick}
                    type={nextType}
                    disabled={disableNext}
                >
                    {activeStep === steps.length - 1 ? 'Save and Add New Form' : activeStep === steps.length - 2 ? 'Preview' : 'Next'}{activeStep < 2 ? <img src={nextIcon} /> : activeStep === steps.length - 2 ? <img src={previewIcon} /> : <div></div>}
                </Button>
            </Box>
        </div>
    )
}

export default Footer