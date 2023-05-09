import styled from 'styled-components'

const Container = styled.div`
  padding: 0;
  margin: 0;
  color: #414833;
`
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)), url("https://medinabaking.com/wp-content/uploads/2021/11/Cakes-What-Are-the-Main-Ingredients-and-Why.jpg");
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  color:white;
  text-align: center;
  position:relative;
`
const IntroContainer = styled.div`
  width: 1000px;
  height: 275px;
  padding: 10px 0px; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: table-cell;
  vertical-align: middle;
  text-align: left;

  .cookbookname{
    font-size: 65px;
    margin-bottom: 45px;
  }

  .getcooking{
    margin-top: 25px;
    background-color: #588157; /* Green */
    border: none;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:10px;
  }

`

const TopRecipes = styled.div`
  background-color: #ffedd8;
  height: 760px;
  color: #414833;
  position: relative;

  .CardGrid{
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: table-cell;
    vertical-align: middle;
  }

  .top{
    font-size:55px;
    margin-bottom: 30px;
  }
`
const SampleRecipe= styled.div`
  background-color: #e6ccb2;
  width: 100%;
  height: 1010px;
  position: relative;
  color: #414833;

  .recipeContainer{
    overflow: hidden;
    width: 1000px;
    background-color: #ffedd8;
    height: 910px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: table-cell;
    vertical-align: middle;
    padding: 50px 70px;
    border-radius: 7px;
  }

  .innerrecipe{
    display: flex; 
    flex-direction: row;
  }

  .recipeSteps{
    margin-top: 75px;
    margin-left: 50px;
  }

  h1{
    font-size: 55px;
  }

  h2{
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 20px;
  }

  img{
    width: 100%;
    object-fit: contain;
    height: 600px;
    margin-top: 0px;
  }
`

const ByDish = styled.div`
  background-color: #718355;
  width: 100%;
  height: 700px;
  position: relative;

  .DishGrid{
    width: 1000px;
    height: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: table-cell;
    vertical-align: middle;
    background-color: #ffedd8;
    padding: 50px 70px;
    border-radius: 7px;
  }

  h1{
    font-size:55px;
    margin-bottom: 10px;
  }

  h2{
    margin-bottom: 20px;
  }

  .item{
    display:inline-block;
    margin-top: 50px;
  }

  .appitem{
    margin-right: 175px;
  }

  .mainitem{
    margin-right: 175px;
  }

  li{
    line-height: 2em;
  }

  p{
    margin-bottom: 10px;
  }
  
`

const ByDietaryRestriction = styled.div`
background-color: #ffedd8;
width: 100%;
height: 500px;
position: relative;

  .dietarycontainer{
    width: 1000px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: table-cell;
    vertical-align: middle;
    background-color: #ffedd8;
    
  }

  h1{
    font-size:55px;
    margin-bottom: 10px;
  }

  h2{
    margin-bottom: 20px;
  }

  .item{
    display:inline-block;
    margin-top: 50px;
  }

  .appitem{
    margin-right: 175px;
  }

  .mainitem{
    margin-right: 175px;
  }

  li{
    line-height: 2em;
  }

  p{
    margin-bottom: 15px;
  }
`

const SubmitRecipe = styled.div`
  background-color: #ffedd8;
  width: 100%;
  height: 490px;

  .submitcontainer{
    display:flex;
    flex-direction: row;
  }

  .submitimage{
    margin-left: 200px;
    width:67%;
  }

  .submittext{
    width: 400px;
  }

  h1{
    margin-top: 20px;
    font-size: 55px;
    margin-bottom: 25px;
  }

  button{
    margin-top: 40px;
    background-color: #588157; /* Green */
    border: none;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:10px;
  }

  img{
    border-radius: 7px;
  }
`

const FeaturedReviews = styled.div`
  background-color: #938274;
  width: 100%;
  height: 600px;

  h1{
    font-size: 55px;
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  color:white;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Container, Description, CodeTag, Intro, 
  TopRecipes, SampleRecipe, ByDish,
  ByDietaryRestriction, SubmitRecipe, FeaturedReviews,
  IntroContainer}
