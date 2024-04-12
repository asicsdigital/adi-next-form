'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Container as MuiContainer } from '@mui/material';
import { applyOverrides } from '../../helpers/index';
import { useTheme } from '../../styles/index';
export function ContainerStyles(theme) {
    return applyOverrides({
    /* Add custom styles here using JSS and add the class names to the Classes type */
    }, 'Container');
}
var theme = useTheme();
export var ContainerStyle = ContainerStyles(theme);
export function Container(props) {
    var defaultProps = {
    /* Add custom prop defaults here */
    };
    var composedProps = __assign(__assign({}, defaultProps), props);
    return _jsx(MuiContainer, __assign({ sx: ContainerStyle }, composedProps));
}
