import IconButton from '@mui/material/IconButton';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Yoda from '../../imgs/yoda.png';
import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ALL_CHARACTERS, ALL_FILMS, ALL_VEHICULES, ALL_SPECIES, ALL_PLANETS } from '../../GQLs';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { getFilms } from '../../redux/reducer/Actions';

export default function Categories(){
  const dispatch = useDispatch()

  const Yodalogo = styled('img')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: 50,
    height: 50,
  }));

  const catchQuery = async(category:string) => {
    let queryContainer = []
    switch(category){
      case 'Films':
        queryContainer.push(ALL_FILMS)
        break
      case 'Characters':
        queryContainer.push(ALL_CHARACTERS)
        break
      case 'Vehicles':
        queryContainer.push(ALL_VEHICULES)
        break
      case 'Species':
        queryContainer.push(ALL_SPECIES)
        break
      case 'Planets':
        queryContainer.push(ALL_PLANETS)
          break
      default:
        queryContainer.push(ALL_FILMS)
    }
    const { loading, error, data } = useQuery(queryContainer[0]);
    dispatch(getFilms(data))
    queryContainer = []
  }

  return(
    <>  
      <Link to='/categories' style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => catchQuery('Films')}>
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
        <IconButton onClick={() => catchQuery('Characters')}>
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
        <IconButton onClick={() => catchQuery('Planets')}>
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
        <IconButton onClick={() => catchQuery('Species')}>
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
        <IconButton onClick={() => catchQuery('Vehicules')}>
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