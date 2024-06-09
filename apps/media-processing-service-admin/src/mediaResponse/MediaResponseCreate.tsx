import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MediaResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <div />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
