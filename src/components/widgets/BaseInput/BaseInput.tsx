import * as React from 'react';

export const BaseInput: React.StatelessComponent<any> = (props) => {
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    formContext,
    registry,
    ...inputProps
  } = props;

  inputProps.type = options.inputType || inputProps.type || 'text';
  const _onChange = ({ currentTarget: { value: inputValue } }: any) => {
    return props.onChange(inputValue === '' ? options.emptyValue : inputValue);
  };

  const { rawErrors, ...cleanProps } = inputProps;

  return (
    <input
      className="form-control"
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      value={value == null ? '' : value}
      {...cleanProps}
      onChange={_onChange}
      onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
      onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
    />
  );
};

BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
};
