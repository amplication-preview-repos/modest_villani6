import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="format" source="format" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="resolution" source="resolution" />
        <TextField label="size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
