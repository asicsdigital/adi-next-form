import { TextFieldClasses as MuiTextFieldClasses, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export type TextFieldProps = MuiTextFieldProps & {};
export type TextFieldClasses = Extract<MuiTextFieldClasses, 'root'>;
export declare function TextFieldStyles(theme: Theme): Styles;
export declare const TextFieldStyle: Styles;
export declare function TextField(props: TextFieldProps): import("react/jsx-runtime").JSX.Element;
