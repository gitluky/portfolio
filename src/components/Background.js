import React from 'react';
// import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from 'styled-components'

export const MultiBackground = ({ className }) => {
    const { workspace, lightbulb } = useStaticQuery(
        graphql`
            query {
                workspace: file(
                    relativePath: { eq: "pexels-pixabay-257897.jpg" }
                    ) {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                lightbulb: file(
                    relativePath: { eq: "pexels-pixabay-269318.jpg" }
                    ) {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )

    const backgroundFluidImageStack = [
        workspace.childImageSharp.fluid,
        lightbulb.childImageSharp.fluid,
      ].reverse()
    

    return (
        <BackgroundImage fluid={backgroundFluidImageStack}>
            <StyledInnerWrapper>
                <h2>
                This is a test of multiple background images.
                </h2>
            </StyledInnerWrapper>
        </BackgroundImage>
    )
}

const StyledInnerWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledMultiBackground = styled(MultiBackground)`
  width: 100%;
  min-height: 100vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: auto;
  /* So we won't have the default "lightgray" background-color. */
  background-color: transparent;
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center 155%, center, center;
  color: #fff;
`

export default StyledMultiBackground;