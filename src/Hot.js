import React from "react";
import LayoutPage from "./Navbar/LayoutPage";
import { useGetAllAttractionsQuery } from "./services/attraction";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { setAttractionID } from "./features/attraction/attractionSlice";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import AttractionCard from "./AttractionCard";

function PageHot() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllAttractionsQuery();

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "coverimage",
      headerName: "Image",
      width: 100,
      renderCell: (params) => <Avatar src={params.value} variant="square" />,
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "detail", headerName: "Detail", width: 500 },
    { field: "latitude", headerName: "Latitude", width: 100 },
    { field: "longitude", headerName: "Longitude", width: 100 },
    {
      field: "action",
      headerName: "Action",
      width: 70,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          onClick={() => dispatch(setAttractionID(params.id))}
        />
      ),
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <LayoutPage>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                className="datagrid"
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5, 10]}
              />
            </div>
            <div className="blak"></div>
            <div>
              <AttractionCard />
            </div>
          </>
        ) : null}
      </Container>
    </LayoutPage>
  );
}

export default PageHot;
