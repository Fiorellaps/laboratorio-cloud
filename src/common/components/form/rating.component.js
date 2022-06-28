import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { useField } from 'formik';
export const RatingComponent = (props) => {
    const { name, max, value, onChange, error } = props;
    const [field, meta, helpers] = Boolean(name) ? useField(name) : [];
    const hasError = error || Boolean(meta && meta.error);
    const helperText = Boolean(field) ? meta === null || meta === void 0 ? void 0 : meta.error : props.helperText;
    const handleChange = (value) => {
        if (onChange) {
            onChange(value);
        }
        else {
            helpers.setValue(value);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Rating, { value: value || (field === null || field === void 0 ? void 0 : field.value), max: max, onChange: handleChange }),
        hasError && (React.createElement(Typography, { variant: "caption", color: "error", gutterBottom: true }, helperText))));
};
//# sourceMappingURL=rating.component.js.map