import { FieldMap } from './types';

export const get = (row: object, fields: string | string[]): any => {
  if (typeof fields === 'string') {
    return row[fields];
  }
  let result = row;
  if (Array.isArray(fields)) {
    for (let i = 0; i < fields.length; i += 1) {
      if (row[fields[i]] === undefined) {
        return null;
      }
      result = row[fields[i]];
    }
  }
  return result;
};

const processFormData = (row: object, fieldsMap: FieldMap): object =>
  Object.keys(fieldsMap).reduce(
    (result, fieldKey) => ({
      ...result,
      [fieldKey]: get(row, fieldsMap[fieldKey]),
    }),
    {},
  );

export default processFormData;
