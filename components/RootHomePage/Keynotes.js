import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import ContentSection from '../shared/ContentSection';
import LinkButton from '../shared/LinkButton';
import YouTubeVideo from '../shared/YouTubeVideo';

import { SlimCenteredH2 } from '../shared/StandardStyles';
import { gridRepeat, below } from '../../utilities';

const VideoCell = styled(Cell)`
  width: 39rem;
  margin: auto;
  text-align: center;

  ${below.xsmall`
    width: 30rem;
  `};
`;

const Title = styled.p`
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const Counselor = styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

const ResponsiveYouTube = styled(YouTubeVideo)`
  height: 20rem;
`;

const PaddedLinkButton = styled(LinkButton)`
  margin-top: 6rem;
  margin-left: 3rem;
`;

const Keynotes = ({ className }) => {
  return (
    <ContentSection className={className}>
      <SlimCenteredH2>Past Keynotes</SlimCenteredH2>
      <Grid columns={gridRepeat.small} alignContent="center">
        <VideoCell center>
          <ResponsiveYouTube videoId="Lp-Xqj8wSMg" />
          <Title className="bold">
            The History of Opera and the Future of Programming
          </Title>
          <Counselor>Jessica Kerr</Counselor>
        </VideoCell>
        <VideoCell>
          <ResponsiveYouTube videoId="Nks_Fb5TUjs" />
          <Title className="bold">The 7 Pillar Developer</Title>
          <Counselor>Cory House</Counselor>
        </VideoCell>
        <VideoCell>
          <ResponsiveYouTube videoId="cU2q7SxE9Vw" />
          <Title className="bold">Adventure as a Career Plan</Title>
          <Counselor>Jason Lengstorf</Counselor>
        </VideoCell>
      </Grid>

      <PaddedLinkButton
        href="http://youtube.com/thatconference/"
        label="See More on THAT You Tube"
        target="_blank"
        backgroundColor="primary"
        borderColor="white"
        color="white"
        hoverBorderColor="primary"
        hoverColor="primary"
        hoverBackgroundColor="white"
      />
    </ContentSection>
  );
};

export default styled(Keynotes)``;
