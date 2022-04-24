import React from "react";
import { useEffect, useState } from "react";
import { apiLoadTree, IGroup } from "../api/apiLoadTree";
import { PersonsList } from "./PersonsList";
export const GroupsList = ({
  updateGroups,
}: {
  updateGroups: (arg: string[]) => void;
}): JSX.Element => {
  const [groups, setGroups] = useState<IGroup[]>();
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const updateSelectedGroupsList = (selectedGroup: string[]): void => {
    if (selectedGroup[0] === "unselected") {
      selectedGroups.includes(selectedGroup[1])
        ? setSelectedGroups(
            selectedGroups.filter((item) => item != selectedGroup[1])
          )
        : setSelectedGroups(selectedGroups);
    } else if (selectedGroup[0] === "selected") {
      selectedGroups.includes(selectedGroup[1])
        ? setSelectedGroups(selectedGroups)
        : setSelectedGroups([...selectedGroups, selectedGroup[1]]);
    }
  };
  useEffect(() => {
    updateGroups(selectedGroups);
  }, [selectedGroups]);
  useEffect(() => {
    apiLoadTree().then((result) => setGroups(result));
  }, []);
  console.log(selectedGroups);
  return (
    <div className="m-3">
      {groups && (
        <div>
          {" "}
          <h5>Management</h5>
          <PersonsList
            persons={groups["Management"]}
            departmentName="Management"
            updateSelectedGroupsList={updateSelectedGroupsList}
          />
        </div>
      )}
      {groups && (
        <div>
          {" "}
          <h5>Sales</h5>
          <PersonsList
            persons={groups["Sales"]}
            departmentName="Sales"
            updateSelectedGroupsList={updateSelectedGroupsList}
          />
        </div>
      )}
      {groups && (
        <div>
          {" "}
          <h5>Consulting</h5>
          <PersonsList
            persons={groups["Consulting"]}
            departmentName="Consulting"
            updateSelectedGroupsList={updateSelectedGroupsList}
          />
        </div>
      )}
      {groups && (
        <div>
          {" "}
          <h5>Marketing</h5>
          <PersonsList
            persons={groups["Marketing"]}
            departmentName="Marketing"
            updateSelectedGroupsList={updateSelectedGroupsList}
          />
        </div>
      )}
      {groups && (
        <div>
          {" "}
          <h5>Development</h5>
          <PersonsList
            persons={groups["Development"]}
            departmentName="Development"
            updateSelectedGroupsList={updateSelectedGroupsList}
          />
        </div>
      )}
    </div>
  );
};
