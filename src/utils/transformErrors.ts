import * as R from 'ramda';

export default (schema: any) =>
  (errors: any[]) => errors.map(
    (error: any) => {
      const path = error.property.split('.').slice(1);
      const properties = new Array(path.length).fill('properties');

      const newPath = R.flatten(R.zip(properties, path));

      const pathSchema: any = R.path(newPath, schema);

      if (pathSchema && pathSchema.errorMessage) {
        error.message = pathSchema.errorMessage;
      }

      return error;
    });