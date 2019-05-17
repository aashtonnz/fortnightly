import React from "react";
import { Typography, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ItemDetails from "./item-details";

const useStyles = makeStyles(theme => ({
  item: {
    margin: "0 30px 30px 30px",
    listStyle: "none",
    "&:first-child": {
      marginTop: "30px"
    }
  },
  checkbox: {
    padding: "0 4px 0 0"
  }
}));

const Item = ({ draft }) => {
  const classes = useStyles();
  const { title } = draft;

  return (
    <li className={classes.item}>
      <table>
        <tbody>
          <tr>
            <td><Checkbox className={classes.checkbox} /></td>
            <td><Typography variant="h5">{title}</Typography></td>
          </tr>
          <tr>
            <td />
            <td>
              <ItemDetails draft={draft} />
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default Item;