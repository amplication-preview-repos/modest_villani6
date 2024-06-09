import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AudioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="format" source="format" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="size" source="size" />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
      </SimpleForm>
    </Edit>
  );
};
