import { BaseInput } from './BaseInput/BaseInput';
import { TextAreaWidget } from './TextAreaWidget/TextAreaWidget';

export const widgets = {
  'BaseInput': BaseInput, // ovveride BaseInput to work in IE9
  'TextareaWidget': TextAreaWidget, // ovveride TextareaWidget to work in IE9
};