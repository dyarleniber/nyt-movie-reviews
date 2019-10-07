import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import apiConfig from '../../config/api';

import Loading from '../../components/Loading';

import { Container, CriticList } from './styles';

import emptyCriticLogo from '../../assets/images/empty-critic.svg';

export default function Critics() {
  const [isLoading, setIsLoading] = useState(true);
  const [critics, setCritics] = useState([]);

  useEffect(() => {
    async function loadCritics() {
      try {
        const response = await api.get(
          `critics/all.json?api-key=${apiConfig.key}`
        );

        setCritics(response.data.results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }

    loadCritics();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <CriticList>
        {critics.map(critic => {
          const image =
            critic.multimedia && critic.multimedia.resource
              ? critic.multimedia.resource.src
              : null;
          return (
            <li>
              <div>
                <img src={image || emptyCriticLogo} alt="critic" />
              </div>
              <strong>{critic.display_name}</strong>
              <small>{critic.bio}</small>
              <a href="#a">See movie reviews</a>
            </li>
          );
        })}
      </CriticList>
    </Container>
  );
}
