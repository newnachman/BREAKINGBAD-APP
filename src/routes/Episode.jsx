import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Waiting from '../components/Waiting';
import Error from '../components/Error';
import styled from 'styled-components';
import EpisodeCard from '../components/EpisodeCard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MAIN_COLORS from '../styles/colors';

const Episode = () => {

  const { id } = useParams();
  const { response, fetchData } = useFetch();
  const [episode, setEpisode] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (id) {
      fetchData(`https://breakingbadapi.com/api/episodes/${id}`);
    }
  }, [fetchData, id])

  useEffect(() => {
    if (response.data) {
      setEpisode( response.data[0] );
      setTimeout(() => { setLoadingData(false) }, 1000);
    }
  },[response])

  return (
    <section>
      <PageHeader color={pageData.color} text={pageData.headerText}/>
      <ContentContainer>
        { loadingData ? 
          <Waiting text={pageData.waitingText} />
          :
          episode ? 
          <EpisodeCard episode={episode}/>                 
          : 
          <Error text={pageData.errorText}/>
        }
        <Link to={`/`}>Go to episodes full list <ChevronRightIcon sx={{ fontSize: 40 }}/> </Link>
      </ContentContainer> 
      <PageFooter color={pageData.color}/>
    </section>
  )
}

export default Episode;

const pageData = {
  headerText:"Breakingbad episode details!",
  color: MAIN_COLORS.blue,
  waitingText: 'Waiting for episode details...',
  errorText: 'Problem while retrieving episode data. Please try again later.',
}

const ContentContainer = styled.div`
  width: 70%;
  margin: 70px auto;

  &>a {
    background-color: #ff8000;
    width: fit-content;
    min-width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    color: white;
    font-weight: 600;
    transition: 300ms linear all;
    padding: 15px 15px;
  }
  
  &>a>svg {
    transition: 300ms linear all;
  }

  &>a:hover>svg {
    margin-right: -15px;
  }

  @media screen and (max-width: 700px){
    width: 90%;
    margin: 30px auto;

    &>a {
      width: 100%;
    }
  }
`;
