import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="format" source="format" />
        <TextInput label="name" source="name" />
        <TextInput label="resolution" source="resolution" />
        <NumberInput step={1} label="size" source="size" />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
      </SimpleForm>
    </Edit>
  );
};
