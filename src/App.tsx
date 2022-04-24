import * as React from "react";
import { GroupsList } from "./components/GroupsList";
import { SelectedGroupsList } from "./components/SelectedGroupsList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export const App = (): JSX.Element => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const updateGroups = (selectedGroups: string[]): void => {
    setSelectedGroups(selectedGroups);
  };
  console.log(selectedGroups);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Departments</h1>
          <div
            style={{
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            <GroupsList updateGroups={updateGroups}></GroupsList>
          </div>
        </div>
        <div className="col">
          <SelectedGroupsList
            selectedGroupList={selectedGroups}
          ></SelectedGroupsList>
        </div>
      </div>
    </div>
  );
};
