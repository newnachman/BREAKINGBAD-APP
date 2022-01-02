import React, {useEffect} from 'react';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import SeasonsList from '../components/SeasonsList';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import Waiting from '../components/Waiting';
import Error from '../components/Error';
import MAIN_COLORS from '../styles/colors';

const Main = () => {
  const { response, fetchData } = useFetch();
  const [episodesListBySeason, setEpisodesListBySeason] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    fetchData('https://breakingbadapi.com/api/episodes');
  }, [fetchData]);

  useEffect(() => {
    if (response.data) {
      const sorted = sortResponseBySeason(response.data);
      setEpisodesListBySeason(sorted);
      setTimeout(() => { setLoadingData(false) }, 1000);
    }
  },[response]);

  return (
    <section>
      <PageHeader color={pageData.color} text={pageData.headerText}/>
        { loadingData ? 
          <Waiting text={pageData.waitingText} />
          :
          episodesListBySeason ? 
          <SeasonsList episodesListBySeason={episodesListBySeason}/>
          :
          <Error text={pageData.errorText}/>
        }
        <PageFooter color={pageData.color}/>
    </section>
  )
}

export default Main;

// Helper function for Main component:
const sortResponseBySeason = (data) => {
  const sortBySeason = {};
  // Get only the existing seasons, insert them as keys: 
  data.forEach(episode => {
    sortBySeason[episode.season.trim()] = [];
  })
  // For each season (keys), get an array of episodes:
  for (let season in sortBySeason) { 
    sortBySeason[season] = getEpisodesBySeason(data, season)
  }
  return sortBySeason;
}

const getEpisodesBySeason = (array, season) => {
  let allEpisodesOfGivenSeason = array.filter(episode => episode.season.trim() === season);
  return allEpisodesOfGivenSeason;
}

const pageData = {
  headerText:"Breakingbad episodes list",
  color:MAIN_COLORS.green,
  waitingText: 'Waiting for episodes data...',
  errorText: 'Problem while retrieving episodes data. Please try again later.',
}
