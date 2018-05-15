import * as React from 'react';
import Form, {
  FormProps, FieldTemplateProps, ArrayFieldTemplateProps, ObjectFieldTemplateProps,
  IChangeEvent, UiSchema, Widget, Field
} from 'react-jsonschema-form';

import FieldTemplate from '../FieldTemplate/FieldTemplate';
import { widgets } from '../widgets/widgets';
import transformErrors from '../../../utils/transformErrors';
import { JSONSchema6 } from 'json-schema';
export interface SchemaFormProps {
  schema?: any; // JSONSchema6;
  uiSchema?: UiSchema;
  formData?: any;
  formContext?: any;
  widgets?: { [name: string]: Widget };
  fields?: { [name: string]: Field };
  noValidate?: boolean;
  noHtml5Validate?: boolean;
  showErrorList?: boolean;
  validate?: (formData: any, errors: any) => any;
  onChange?: (e: IChangeEvent) => any;
  onError?: (e: any) => any;
  onSubmit?: (e: any) => any;
  liveValidate?: boolean;
  FieldTemplate?: React.StatelessComponent<FieldTemplateProps>;
  ArrayFieldTemplate?: React.StatelessComponent<ArrayFieldTemplateProps>;
  ObjectFieldTemplate?: React.StatelessComponent<ObjectFieldTemplateProps>;
  safeRenderCompletion?: boolean;
  transformErrors?: (errors: any) => any;

  // HTML Attributes
  id?: string;
  className?: string;
  name?: string;
  method?: string;
  target?: string;
  action?: string;
  autocomplete?: string;
  enctype?: string;
  acceptcharset?: string;
}

export const SchemaForm = ({ ...props }: FormProps) => (
  <Form
    noHtml5Validate={true}
    safeRenderCompletion={true}
    liveValidate={false}
    widgets={widgets}
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    transformErrors={transformErrors(props.schema)}
    {...props}
  />
);
