import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { TABLE_COLUMNS_SETTINGS } from "./table/constants";

import { DataGrid } from "@mui/x-data-grid";

const TableRoot = styled(Box)({
  height: 500,
  width: "100%",
});

function Table(props) {
  const { rows } = props;
  return (
    <TableRoot>
      <DataGrid
        disableColumnMenu
        getRowId={(row) => row.name}
        rows={rows}
        columns={TABLE_COLUMNS_SETTINGS}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 50 },
          },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </TableRoot>
  );
}

export default Table;
