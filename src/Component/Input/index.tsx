import { get, isString } from "lodash"
import { FC } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { InputType } from "../../Utils/interface"
import TextField from '@mui/material/TextField';

const Input: FC<InputType> = ({ name, fieldText, helperText, placeholder, rules, disabled, ...rest }) => {
    const { control, formState: { errors } } = useFormContext()

    const error = get(errors, `${name}.message`, "")

    return (
        <div className="input-container">
            <div className="input-labels">
                {fieldText ? <div>{fieldText}{{ ...rules }.required && <span className="required">*</span>}{':'}</div> : <div></div>}
                <span>{helperText}</span>
            </div>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field }) => {
                    return (
                        <TextField
                            variant="filled"
                            placeholder={placeholder}
                            error={Boolean(error)}
                            {...field}
                            {...rest}
                        />
                    )
                }}
            />
            {name === "federalBusinessId" && <a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" target="__blank">Don't have EIN?</a>}
            {
                isString(error) && (
                    <span className="dsm-inputbox-error-msg inline-error-msg">{error}</span>
                )
            }
        </div >
    )
}

export default Input