import * as React from 'react';
import Form from 'react-jsonschema-form';

import FieldTemplate from '../FieldTemplate/FieldTemplate';
import { widgets } from '../widgets/widgets';
import transformErrors from '../../utils/transformErrors';

const SchemaForm = ({ ...props }: any) => (
  <Form
    noHtml5Validate={true}
    safeRenderCompletion={true}
    liveValidate={true}
    widgets={widgets}
    FieldTemplate={FieldTemplate}
    transformErrors={transformErrors(props.schema)}
    {...props}
  />
);

export default SchemaForm;
