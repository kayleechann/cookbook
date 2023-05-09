import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap:20px;
  margin-top: 20px;
`

const Review = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  height: 200px;
  background-color: #e6ccb2;

  h1:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }

  p{
    margin-top: 20px;
    line-height: 1.5em;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Reviews() {
  return (
    <FlexContainer>
      <Review>
        <h1>1 Spice Crusted Salmon</h1>
        <p>"Wow, this was amazing! I was worried the flavor would be too strong, but it was perfect. The cooking time was spot on too. This recipe will definitely be in heavy rotation at my house!" - Rebecca Q.
        </p>
      </Review>
      <Review>
        <h1>2 Simple Sausage and Peppers</h1>
        <p>"I was looking for an easy one-pan dinner and this was perfect! The spice level was just right for my family--not too hot, but not bland either. It was a big hit!" - Mike T.</p>
      </Review>
      <Review>
        <h1>3 Creamy Mushroom Risotto</h1>
        <p>"This recipe was delicious and very simple to make. It turned out perfectly creamy and flavorful. I will definitely make this again in the future." - Alison F..</p>
      </Review>
      <Review>
        <h1>4 Roasted Chicken with Vegetables</h1>
        <p>"The veggies in this dish were so good! I loved the mix of flavors and textures. And the chicken was really moist and flavorful as well. This recipe is a keeper!" - Kaitlyn H.</p>
      </Review>
    </FlexContainer>
  )
}
