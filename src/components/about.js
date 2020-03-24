import React from 'react'
import { useStaticQuery, graphql, Link }  from 'gatsby' 
import Img from 'gatsby-image'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      flowerMouth: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>The ability to create</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat voluptas doloremque incidunt adipisci iure cupiditate ratione nulla, dolor excepturi, minus placeat vel eum officiis quasi deserunt saepe, iusto unde exercitationem.
            Excepturi vero vel facilis suscipit deleniti ab, rerum delectus dicta ratione, nobis eos ullam maiores, ipsam omnis reiciendis laboriosam. Beatae, non earum! Doloribus debitis labore placeat voluptas deserunt fuga cum!
            Quas, quaerat delectus at quisquam veniam consequatur iste adipisci corporis aliquid assumenda, mollitia reprehenderit? Ullam ducimus itaque nihil dicta tenetur minima? Nesciunt, autem consequuntur nulla explicabo sequi culpa ratione odio.</p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <Img fluid={data.fist.childImageSharp.fluid} />
            </div>
            <div className="bottom-left">
              <Img fluid={data.flowerMouth.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default About
