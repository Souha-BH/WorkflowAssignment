# Introduction

The goal of this test is to give us a glimpse of your coding abilities. Your assigned project is small and should not take you more than 6hs, if you feel that you need more time, **DON'T spend it!** Simply present your work as far as you got and think of the missing steps to complete it. An incomplete project won't diminish your chances if you can correctly identify why it took more time for you.

We will go through all of this during your code review, and you'll have the chance to explain the obstacles you faced, as well as your design decisions.

Feel free to contact us if you have any doubts about this specification, asking questions won't affect your appraisal, communication is a big part of the developer's job!

# Groups and Persons selection tree

In any company the employees are usually divided in different groups. A common scenario is that an user needs to select groups or employees individually in order to create some kind of report about the selected entries. Your goal on this test is to create such tree of groups and employees, give the user the possibility to select a group or an employee and to display the selected elements next to it.

## Tasks
1. Model `IGroup, IPerson` and implement `apiLoadTree` in *apiLoadTree.ts* file. You should read the elements from the `groups.json`
2. Create the components necessary for the task under the *components* folder.
3. Integrate everything under `App.tsx` file

## UX Acceptance Criteria
* When selecting a group then all the persons of this group should be selected
* If all persons of the group are selected, then the group is selected
* On the right is the list of the selected groups. Use your imagination to render this list, there is no specific acceptance criteria

## DEV Acceptance criteria
* Implement and use the src/api/apiLoadTree.ts to fetch the items.
* Provide a clean and professional app scaffold and code style.

## Notes
* Imagine you deliver this code and product to a final customer.
* If something is unclear or missing, please don't hesitate to contact us.

## Bonus - Not mandatory
* Beautify the UI as you want.
* Utilize the available scripts of this package.

## How to send your test
* Compress this package without the node_modules and send it to us.

## How to run the project
* run `yarn install`
* run `yarn start`
