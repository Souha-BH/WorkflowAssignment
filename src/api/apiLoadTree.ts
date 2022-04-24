const groups = require("./groups.json");
export interface IGroup {
  group_id: IPerson[];
}
export interface IPerson {
  fullname: string;
}

export const apiLoadTree = async (): Promise<IGroup[]> => {
  return groups;
};
