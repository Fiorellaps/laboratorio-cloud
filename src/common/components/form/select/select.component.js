var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { useField } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import * as classes from './select.styles';
export const SelectComponent = (props) => {
    const { name, items, label, error, onChange, onBlur, value, className } = props, otherProps = __rest(props, ["name", "items", "label", "error", "onChange", "onBlur", "value", "className"]);
    const [field, meta] = Boolean(name) ? useField(name) : [];
    const hasError = error || Boolean(meta && meta.touched && meta.error);
    const helperText = Boolean(field) ? meta === null || meta === void 0 ? void 0 : meta.error : props.helperText;
    const labelId = `${name}-label`;
    return (React.createElement(FormControl, { className: className, error: hasError, fullWidth: true, margin: "normal" },
        React.createElement(InputLabel, { htmlFor: name, id: labelId }, label),
        React.createElement(Select, Object.assign({}, otherProps, { classes: {
                select: classes.select,
            }, id: name, labelId: labelId, name: name, onChange: onChange || (field === null || field === void 0 ? void 0 : field.onChange), onBlur: onBlur || (field === null || field === void 0 ? void 0 : field.onBlur), value: value || (field === null || field === void 0 ? void 0 : field.value) }), items.map((item) => (React.createElement(MenuItem, { key: item.id, value: item.id }, item.name)))),
        hasError && React.createElement(FormHelperText, null, helperText)));
};
//# sourceMappingURL=select.component.js.map