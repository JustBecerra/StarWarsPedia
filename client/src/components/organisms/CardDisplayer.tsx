import { Box, Container } from "@mui/system";
import Card from "../molecules/Card";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { sortCategory, sortData } from "../../helpFunctions/helpFuncs";
import { categoryTypes } from "../../redux/types/GQLtypes";

export default function CardDisplayer() {
  let categoryID = useSelector(
    (state: RootState) => state.CategoryID.currentCategory
  );

  const { loading, error, data } = useQuery(sortCategory(categoryID));
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const categoryInfo = sortData(data);
  console.log(categoryInfo);
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
          // console.log(categ)
          return <Card key={categ.id} categ={categ} />;
        })}
      </Box>
    </Container>
  );
}
