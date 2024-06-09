import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="format" source="format" />
        <TextInput label="name" source="name" />
        <TextInput label="resolution" source="resolution" />
        <NumberInput step={1} label="size" source="size" />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
      </SimpleForm>
    </Create>
  );
};
