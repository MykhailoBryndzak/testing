import './FieldTemplate.css';

import * as React from 'react';

const codeRegex = /\w\d{2,6}\w\./;

export default (props: any) => {
  const { id, classNames, label, help, required, description, errors, children, displayLabel } = props;

  const newLabel = label.replace(codeRegex, (val: any) => `<mark>${val}</mark>`) + (required ? '<span style="color: red"> *</span>' : '');

  return (
    <div className={classNames}>
      {displayLabel
        ? <label
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: newLabel }}
        />
        : null
      }
      {children}
      {description}
      {errors}
      {help}
    </div>
  );
};
