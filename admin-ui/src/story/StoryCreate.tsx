import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
