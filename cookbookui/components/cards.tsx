import styled from 'styled-components'
import Link from 'next/link'

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap:20px;
  margin-top: 20px;
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
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

export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <h1>Spice Crusted Salmon</h1>
        <p>Moist and flaky salmon fillets coated in aromatic herbs and spices for a burst of flavor in every bite.
        </p>
      </Card>
      <Card>
        <h1>Spicy Vodka Pasta</h1>
        <p>Easy comfort food with a spicy kick. Hearty Italian sausage and colorful bell peppers make the perfect weeknight meal.</p>
      </Card>
      <Card>
        <h1>Crunchy Onion Rings</h1>
        <p>Crispy and golden, these onion rings are the ultimate indulgence for snack time or as a mouth-watering side dish.</p>
      </Card>
      <Card>
        <h1>Creamy Mushroom Risotto</h1>
        <p>This old-school Italian classic never gets old. Rich, comforting and always impressive, it's the perfect winter dinner party main</p>
      </Card>
    </FlexContainer>
  )
}
