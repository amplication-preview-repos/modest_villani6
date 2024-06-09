import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Videos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="data" source="data" />
        <TextField label="duration" source="duration" />
        <TextField label="format" source="format" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="resolution" source="resolution" />
        <TextField label="size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadedAt" source="uploadedAt" />
      </Datagrid>
    </List>
  );
};
