import * as React from 'react';

export const TextAreaWidget: React.StatelessComponent<any> = (props) => {
  const {
    id,
    options,
    placeholder,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  const _onChange = ({ currentTarget: { value: inputValue } }: any) => {
    return onChange(inputValue === '' ? options.emptyValue : inputValue);
  };
  return (
    <textarea
      id={id}
      className="form-control"
      value={typeof value === 'undefined' ? '' : value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      rows={options.rows}
      onBlur={onBlur && (event => onBlur(id, event.target.value))}
      onFocus={onFocus && (event => onFocus(id, event.target.value))}
      onChange={_onChange}
    />
  );
};

TextAreaWidget.defaultProps = {
  autofocus: false,
  options: {},
};