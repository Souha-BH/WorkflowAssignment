import React from "react";

export const SelectedGroupsList = ({
  selectedGroupList,
}: {
  selectedGroupList: string[];
}): JSX.Element => {
  const selectedGroups = selectedGroupList.map((group) => (
    <li key={group}>{group}</li>
  ));
  console.log(selectedGroupList);
  return (
    <div className="m-3">
      <h1>Selected Groups</h1>
      <ul>{selectedGroups}</ul>
    </div>
  );
};
