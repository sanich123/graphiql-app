export type ArgsType = {
  kind: string;
  name: string | null;
  ofType: ArgsType;
};

export type ArgsArr = {
  name: string;
  type: ArgsType;
};

export type ItemArrField = {
  name: string;
  args: [] | ArgsArr[];
  type: ArgsType;
};

export type ItemInputField = {
  type: ArgsType;
  name: string;
};

export type ItemSchemaTypes = { kind: string; name: string; fields: ItemArrField[]; inputFields: ItemInputField[]; enumValues: [] };
