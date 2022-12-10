import { Box, Container } from "@mui/system";
import Card from "../molecules/Card";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { sortCategory, sortData } from "../../helpFunctions/helpFuncs";
import { categoryTypes } from "../../redux/types/GQLtypes";

const CardDisplayer = () => {
  const categoryID = useSelector(
    (state: RootState) => state.CategoryID.currentCategory
  );

  const { loading, error, data } = useQuery(sortCategory(categoryID));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const categoryInfo = sortData(data);

  return (
    <Container>
      <Box
        sx={{
          width: 1000,
          height: "fit-content",
          backgroundColor: "#13191a",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 11,
          paddingTop: 5,
        }}
      >
        {categoryInfo.map((categ: categoryTypes) => {
          return (
            <Card key={categ.id} categ={categ} currentCategory={categoryID} />
          );
        })}
      </Box>
    </Container>
  );
};

export default CardDisplayer;
