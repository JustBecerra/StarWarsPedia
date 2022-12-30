import { Box } from "@mui/system";
import Card from "../molecules/Card";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { sortCategory, sortData } from "../../helpFunctions/helpFuncs";
import { categoryTypes } from "../../redux/types/GQLtypes";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

const CardDisplayer = () => {
  const categoryID = useSelector(
    (state: RootState) => state.CategoryID.currentCategory
  );

  const { loading, error, data } = useQuery(sortCategory(categoryID));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const categoryInfo = sortData(data);

  const screenH = (window.innerHeight * 75) / 100;
  return (
    <Box
      sx={{
        width: 1000,
        height: screenH,
        backgroundColor: "#13191a",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 11,
        marginBottom: 5,
        paddingTop: 3,
        paddingBottom: 3,
        overflowY: "scroll",
      }}
    >
      <List>
        {categoryInfo.map((categ: categoryTypes) => {
          return (
            <ListItem>
              <Card key={categ.id} categ={categ} currentCategory={categoryID} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default CardDisplayer;
