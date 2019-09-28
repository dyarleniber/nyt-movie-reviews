import React from 'react';
import { Link } from 'react-router-dom';

import movieLogo from '../../assets/images/movie-logo.svg';
import nytLogo from '../../assets/images/nyt-logo.svg';

import { Container, Content, Options } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={movieLogo} alt="MovieLogo" />
          </Link>
        </nav>

        <img src={nytLogo} alt="NYTLogo" />

        <aside>
          <Options>
            <div>
              <Link to="/reviews">Reviews</Link>
              <Link to="/critics">Critics</Link>
            </div>
          </Options>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
