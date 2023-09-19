import { Autocomplete, TextField } from '@mui/material'
import { FC } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { AutoCompleteType } from '../../Utils/interface'
import { get, isString } from "lodash"

const AutoComplete: FC<AutoCompleteType> = ({ name, options, fieldText, helperText, rules, ...rest }) => {
    const { control, formState: { errors } } = useFormContext()
    const error = get(errors, `${name}.message`, "")

    return (
        <div className='dropdown-container'>
            <div className='input-labels'>
                {fieldText && <div>{fieldText}{{ ...rules }.required && <span className="required">*</span>}:</div>}
                <span>{helperText}</span>
            </div>
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field: { onChange, ...restfield } }) => {
                    return (<Autocomplete
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                error={Boolean(error)}
                            />
                        )}
                        onChange={(e, newValue) => {
                            onChange(newValue)
                        }}
                        getOptionLabel={(options) => options.label || options}
                        {...restfield}
                        {...rest}
                    />)
                }}
            />
            {
                isString(error) && (
                    <span className="dsm-inputbox-error-msg inline-error-msg">{error}</span>
                )
            }
        </div >
    )
}

export default AutoComplete