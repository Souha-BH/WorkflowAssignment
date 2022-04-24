import React, { useState, useEffect } from "react";
import { IPerson } from "../api/apiLoadTree";
export const PersonsList = ({
  persons,
  departmentName,
  updateSelectedGroupsList,
}: {
  persons: IPerson[];
  departmentName: string;
  updateSelectedGroupsList: (arg: string[]) => void;
}): JSX.Element => {
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);

  useEffect(() => {
    clonePersons.length === persons.length
      ? setSelectedGroup(["selected", departmentName])
      : setSelectedGroup(["unselected", departmentName]);
  }, [departmentName]);

  const [clonePersons, setClonePersons] = useState<IPerson[]>([]);
  let i = 0;
  const personsList = persons.map((fullname) => (
    <option
      selected={clonePersons.includes(fullname)}
      onClick={() =>
        clonePersons.includes(fullname)
          ? setClonePersons(clonePersons.filter((item) => item != fullname))
          : setClonePersons([...clonePersons, fullname])
      }
      value={i + 1}
    >
      {fullname}
    </option>
  ));
  const clonePersonslist = clonePersons ? (
    clonePersons.map((fullname) => (
      <div
        className="badge bg-primary text-wrap m-1"
        onClick={() =>
          clonePersons.includes(fullname)
            ? setClonePersons(clonePersons.filter((item) => item != fullname))
            : setClonePersons([...clonePersons, fullname])
        }
      >
        {fullname}
      </div>
    ))
  ) : (
    <span>None selected</span>
  );
  console.log(selectedGroup);
  return (
    <div>
      <p>{clonePersonslist}</p>
      <select
        id="example-multiple-selected"
        multiple
        className="form-select 3col active form-control"
        onClick={() => {
          clonePersons.length === persons.length
            ? updateSelectedGroupsList(["unselected", departmentName])
            : clonePersons.length === persons.length - 1
            ? updateSelectedGroupsList(["selected", departmentName])
            : {};
        }}
      >
        <optgroup label={departmentName}>
          {personsList}
          <option
            selected={clonePersons.length === persons.length}
            onClick={() => {
              if (clonePersons.length === persons.length) {
                setClonePersons([]);
                updateSelectedGroupsList(["unselected", departmentName]);
              } else {
                setClonePersons([...persons]);
                updateSelectedGroupsList(["selected", departmentName]);
              }
            }}
            value={persons.length}
          >
            select all of the {departmentName} department
          </option>
        </optgroup>
      </select>
    </div>
  );
};
