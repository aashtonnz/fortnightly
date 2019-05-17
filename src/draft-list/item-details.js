import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  table: {
    "& > tbody > tr > td": {
      "&:first-child": {
        textAlign: "right"
      }
    }
  }
}));

const ItemDetails = ({ draft }) => {
  const classes = useStyles();
  let { createdAt, lastEditedAt } = draft;

  createdAt = new Date(createdAt).toLocaleString();
  lastEditedAt = new Date(lastEditedAt).toLocaleString();

  return (
    <Typography variant="caption">
      <table className={classes.table}>
        <tbody>
          <tr>
            <td>Created:</td>
            <td>{createdAt}</td>
          </tr>
          <tr>
            <td>Last edit:</td>
            <td>{lastEditedAt}</td>
          </tr>
        </tbody>
      </table>
    </Typography>
  );
};

export default ItemDetails;