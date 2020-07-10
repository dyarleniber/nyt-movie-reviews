import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';
import { searchCriticsRequest } from '../../store/modules/critics/actions';
import { Container, CriticList } from './styles';
import emptyCriticLogo from '../../assets/images/empty-critic.svg';

export default function Critics() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.critics.loading);

  const critics = useSelector(state => state.critics.critics);

  useEffect(() => {
    dispatch(searchCriticsRequest());
  }, [dispatch]);

  if (loading) {
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
