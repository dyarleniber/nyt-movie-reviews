import React from 'react';

import { Container, CriticList } from './styles';

export default function Critics() {
  return (
    <Container>
      <CriticList>
        <li>
          <div>
            <img
              src="http://nytimes.com/images/2007/01/05/movies/sholden.163.jpg"
              alt="Critic"
            />
          </div>
          <strong>Stephen Holden</strong>
          <small>
            Stephen Holden is a film and music critic for The Times; he joined
            the culture staff in 1988. Prior to that, he was a pop music critic
            and journalist for Rolling Stone, The Village Voice, and numerous
            other magazines and anthologies. Drawing on his experiences as a
            journalist and record executive, he wrote a satirical novel about
            the record business, Triple Platinum, that was published in 1980 by
            Dell Books. In 1986, he won a Grammy with six other writers for Best
            Album Notes for The Voice: The Columbia Years, a Frank Sinatra
            Anthology. Born July 18, 1941, Mr. Holden graduated from Yale
            University in 1963 with a Bachelor of Arts degree in English and was
            elected Class Poet.
          </small>
          <a href="#a">See movie reviews</a>
        </li>

        <li>
          <div>
            <img
              src="http://static01.nyt.com/images/2015/10/07/topics/ao-scott/ao-scott-articleInline.jpg"
              alt="Critic"
            />
          </div>
          <strong>Allen</strong>
          <small>
            Stephen Holden is a film and music critic for The Times; he joined
            the culture staff in 1988. Prior to that, he was a pop music critic
            and journalist for Rolling Stone, The Village Voice, and numerous
            other magazines and anthologies. Drawing on his experiences as a
            journalist and record executive, he wrote a satirical novel about
            the record business, Triple Platinum, that was published in 1980 by
            Dell Books. In 1986, he won a Grammy with six other writers for Best
            Album Notes for The Voice: The Columbia Years, a Frank Sinatra
            Anthology. Born July 18, 1941, Mr. Holden graduated from Yale
            University in 1963 with a Bachelor of Arts degree in English and was
            elected Class Poet.
          </small>
          <a href="#a">See movie reviews</a>
        </li>
      </CriticList>
    </Container>
  );
}
