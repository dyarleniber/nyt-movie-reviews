import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import nytLogo from '../../assets/images/nyt.svg';
import { Container, Content, Options, Option } from './styles';

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={nytLogo} alt="NYTLogo" />
          </Link>
        </nav>

        <aside>
          <Options>
            <div>
              <Option to="/reviews" current={pathname === '/reviews' ? 1 : 0}>
                Reviews
              </Option>
              <Option to="/critics" current={pathname === '/critics' ? 1 : 0}>
                Critics
              </Option>
              <Option
                to="/favorites"
                current={pathname === '/favorites' ? 1 : 0}
              >
                Favorites
              </Option>
            </div>
          </Options>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
