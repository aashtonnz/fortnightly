import React, { useState } from "react";
import Item from "./item";

const mockDraftList = [
  {
    id: "123",
    title: "The Meaning of Life 1",
    createdAt: "2019-05-17T09:16:06.103Z",
    lastEditedAt: "2019-05-17T09:20:36.103Z"
  },
  {
    id: "abc",
    title: "The Meaning of Life 2",
    createdAt: "2019-05-17T09:16:06.103Z",
    lastEditedAt: "2019-05-17T09:20:36.103Z"
  },
  {
    id: "xyz",
    title: "The Meaning of Life 3",
    createdAt: "2019-05-17T09:16:06.103Z",
    lastEditedAt: "2019-05-17T09:20:36.103Z"
  }
];

const DraftList = () => {
  const [ draftList, setDraftList ] = useState(mockDraftList);

  const items = draftList.map(draft => <Item key={draft.id} draft={draft} />);

  return (
    <ul>
      {items}
    </ul>
  );
};

export default DraftList;