import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import BasicLayout from '../components/BasicLayout';
import SEO from '../components/Seo';
// import { rhythm } from '../utils/typography';
import { StyledBlueH1 } from '../styles/common';

const StyledArticle = styled.article`
  h1 {
    text-align: center;
  }

  p {
    font-size: 1.125rem;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const StyledSection = styled.section``;

const StyleImage = styled(Img)`
  box-shadow: 8px 8px 10px #aaa;
  border-radius: 5px;
`;

const NonStretchedImage = props => {
  const { fluid } = props;
  let normalizedProps = props;
  if (fluid && fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto 1.5rem', // Used to center the image
      },
    };
  }

  return <StyleImage {...normalizedProps} />;
};

NonStretchedImage.propTypes = {
  fluid: PropTypes.shape({
    presentationWidth: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
};

const About = ({ data }) => {
  const { profilePicture } = data;
  return (
    <BasicLayout withNav withFooter>
      <Fragment>
        <SEO
          title="About Randy"
          keywords={['blog', 'javascript', 'programming', 'code', 'developer']}
        />
        <StyledArticle>
          <StyledSection>
            <StyledBlueH1>About Me and the Blog</StyledBlueH1>
            {NonStretchedImage(profilePicture.childImageSharp)}
          </StyledSection>
          <StyledSection>
            <h2>About me</h2>
            <p>
              My name is Randy Perez and I am a Software Developer from Santo
              Domingo, Dominican Republic. I have been programming for 8+ years
              and professionally for the last 5+ years. Currently, I work for{' '}
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href="http://intellisysdcorp.com"
              >
                Intellisys
              </OutboundLink>{' '}
              a local outsourcing company that contracts my service to{' '}
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.soul-cycle.com"
              >
                SoulCycle
              </OutboundLink>
              , a fitness company based in NYC.
            </p>
            <p>
              I consider myself to be a web technology and data science
              aficionado. With this in mind, I&#39;m looking forward to talking,
              hacking, learning, breaking, exploring... everything(well, a good
              chunk!) about JavaScript, Python, Statistical Learning and Modern
              Web Applications.
            </p>
            <p>
              On a more personal note, I&#39;m a die-hard soccer, baseball, and
              tennis fan that loves to read about sports analytics and I&#39;m
              planning to write about this topic in the near future. Recently I
              rediscovered my long lost love for reading, thus every night
              you&#39;ll find me diving into novels, history and some technical
              books. I believe that exercise is a key factor in a person&#39;s
              mental and physical health that&#39;s why I usually go down the
              rabbit hole of fitness videos and articles but I also try to jump
              start my mornings with a visit to my local gym!
            </p>
            <p>Obviously, coffee is life!!</p>
          </StyledSection>
          <StyledSection>
            <h2>Purpose of the Blog</h2>
            <p>
              The main reason that brings my blog into existence is having an
              archive for my thoughts and ideas on software and other, mostly
              related, interests.
            </p>
            <p>
              Also, an important aspect for me is teaching and learning. If
              someone can read a piece of content I wrote and find value in it,
              that&#39;s an awesome day. If I can better my understanding of a
              topic by writing about it or reading a comment, that&#39;s an
              awesome day.
            </p>
            <p>
              Last but not least, I want to become a better writer since
              there&#39;s plenty of professional and personal benefits that come
              with this, sometimes overlooked, skill.
            </p>
          </StyledSection>
          <StyledSection>
            <h2>Contact me</h2>
            <p>
              If you would like to share any proposal that matches my interests,
              have a project idea, suggestion, or just feel like talking about
              sports and/or code don&#39;t hesitate to{' '}
              <Link to="contact">contact me</Link>.
            </p>
          </StyledSection>
        </StyledArticle>
      </Fragment>
    </BasicLayout>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    profilePicture: PropTypes.object.isRequired,
  }).isRequired,
};

export const aboutQuery = graphql`
  query AboutQuery {
    profilePicture: file(relativePath: { eq: "assets/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 555, quality: 100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;

export default About;
