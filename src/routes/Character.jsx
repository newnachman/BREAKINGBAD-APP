import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import { useFetch } from '../hooks/useFetch';
import CharacterCard from '../components/CharacterCard';
import Waiting from '../components/Waiting';
import Error from '../components/Error';
import MAIN_COLORS from '../styles/colors';

const Character = () => {
  const { name } = useParams();
  const { response, fetchData } = useFetch();
  const [character, setCharacter] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (name) {
     let urlName = name.replace(" ", "+")
      fetchData(`https://breakingbadapi.com/api/characters?name=${urlName}`);
    }
  }, [fetchData, name])

  useEffect(() => {
    if (response.data) {
      setCharacter( response.data[0]);
      setTimeout(() => { setLoadingData(false) }, 1000);
    }
  },[response]);
  
  return (
    <section>
      <PageHeader color={pageData.color} text={pageData.headerText}/>
      { loadingData ? 
        <Waiting text={pageData.waitingText} />
        :
        character ?
        <CharacterCard character={character}/>
        :
        <Error text={pageData.errorText}/>
      }
      <PageFooter color={pageData.color}/>
    </section>
  )
}

export default Character;

const pageData = {
  headerText:"Breakingbad Character Details",
  color: MAIN_COLORS.red,
  waitingText: 'Waiting for character details...',
  errorText: 'Problem while retrieving character data. Please try again later.',
}
