import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { CheckboxType } from "../../Utils/interface";

const CustomCheckbox: FC<CheckboxType> = ({ name, label, rules }) => {
    const { control, watch, clearErrors } = useFormContext()

    return (
        <div className="checkbox-container">
            <Controller
                name={name}
                control={control}
                rules={{ ...rules }}
                render={({ field: { onChange } }) => (
                    <FormControlLabel
                        control={<Checkbox onChange={(e) => onChange(e.target.checked)} checked={watch(name)} />}
                        label={label}
                    />
                )}
            />
        </div>
    );
}

export default CustomCheckbox;
