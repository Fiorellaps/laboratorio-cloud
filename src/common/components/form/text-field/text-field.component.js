import React from 'react';
import { cx } from 'emotion';
import { useField } from 'formik';
import MuiTextField from '@material-ui/core/TextField';
import * as classes from './text-field.styles';
export const TextFieldComponent = (props) => {
    const { name, onChange, onBlur, value, error, inputProps } = props;
    const [field, meta] = Boolean(name) ? useField(name) : [];
    const hasError = error || Boolean(meta && meta.touched && meta.error);
    const helperText = Boolean(field) ? meta === null || meta === void 0 ? void 0 : meta.error : props.helperText;
    return (React.createElement(MuiTextField, Object.assign({}, props, { name: name, id: name, onChange: onChange || (field === null || field === void 0 ? void 0 : field.onChange), onBlur: onBlur || (field === null || field === void 0 ? void 0 : field.onBlur), value: value || (field === null || field === void 0 ? void 0 : field.value), error: hasError, helperText: hasError ? helperText : '', fullWidth: true, margin: "normal", inputProps: Object.assign(Object.assign({}, inputProps), { className: cx(inputProps === null || inputProps === void 0 ? void 0 : inputProps.className, classes.input) }) })));
};
//# sourceMappingURL=text-field.component.js.map