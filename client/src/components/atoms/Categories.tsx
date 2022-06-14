import IconButton from '@mui/material/IconButton';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Yoda from '../../imgs/yoda.png';
import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Queries from '../../queryActions/Queries';

export default function Categories(){
  const Yodalogo = styled('img')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: 50,
    height: 50,
  }));

  return(
    <>  
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => Queries('Films')}>
          <Typography
            variant="h6"
            color="whitesmoke"
          >
            Films
          </Typography>
            <MovieSharpIcon 
              sx={{ color:"whitesmoke" }}
            />
        </IconButton>
      </Link>
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => Queries('Characters')}>
          <Typography
            variant="h6"
            color="whitesmoke"
          >
            Characters
          </Typography>
            <PeopleAltSharpIcon 
              sx={{ color:"whitesmoke" }}
            />
        </IconButton>
      </Link>
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => Queries('Planets')}>
          <Typography
            variant="h6"
            color="whitesmoke"
          >
            Planets
          </Typography>
            <LanguageSharpIcon 
              sx={{ color:"whitesmoke" }}
            />
        </IconButton>
      </Link>
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => Queries('Species')}>
          <Typography
            variant="h6"
            color="whitesmoke"
          >
            Species
          </Typography>
            <Yodalogo src={Yoda} />
        </IconButton>
      </Link>
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => Queries('Vehicules')}>
          <Typography
            variant="h6"
            color="whitesmoke"
          >
            Vehicules
          </Typography>
            <RocketLaunchIcon 
              sx={{ color:"whitesmoke" }}
            />
        </IconButton>
      </Link>
    </>
    )
}