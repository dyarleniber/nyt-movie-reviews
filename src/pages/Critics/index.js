import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';

import GetCriticsService from '../../services/GetCriticsService';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';

import { Container, CriticList } from './styles';

import emptyCriticLogo from '../../assets/images/empty-critic.svg';

export default function Critics() {
  const [isLoading, setIsLoading] = useState(true);
  const [critics, setCritics] = useState([]);

  useEffect(() => {
    async function loadCritics() {
      const response = await GetCriticsService.constructor.run();

      if (response.success) {
        setCritics(response.data);
        setIsLoading(false);
      } else {
        toast.error('Failed to load critics');
        setIsLoading(false);
      }
    }

    loadCritics();
  }, []);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <>
      {!critics.length ? (
        <NotFound Message="No records found" />
      ) : (
        <Container>
          <CriticList>
            {critics.map(critic => {
              const image =
                critic.multimedia && critic.multimedia.resource
                  ? critic.multimedia.resource.src
                  : null;
              return (
                <li key={critic.display_name}>
                  <div>
                    <img src={image || emptyCriticLogo} alt="critic" />
                  </div>
                  <strong>{critic.display_name}</strong>
                  <small>{critic.bio}</small>
                  <a href={`/reviews/${critic.display_name}`}>
                    See movie reviews
                  </a>
                </li>
              );
            })}
          </CriticList>
        </Container>
      )}
    </>
  );
}
