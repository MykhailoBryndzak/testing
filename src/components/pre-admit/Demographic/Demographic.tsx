import * as React from 'react';

import { SchemaForm, SchemaFormProps } from '../../form/SchemaForm/SchemaForm';
import { schema } from './schema';
import { uiSchema } from './uiSchema';

export const Demographic: React.StatelessComponent<SchemaFormProps> = (props) => (
  <SchemaForm
    schema={schema}
    uiSchema={uiSchema}
    {...props}
  />
);