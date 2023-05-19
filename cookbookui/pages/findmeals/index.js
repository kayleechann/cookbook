import React from 'react'
import styles from '../../components/FindMeals.module.css'

function FindMeals() {
  
  const searchBtn = document.getElementById('searchbtn');
  const mealList = document.getElementById('meal');
  const mealDetailsContent = document.querySelector('.mealdetailscontent');
  const recipeCloseBtn = document.getElementById('recipeclosebtn');

  // event listeners
  searchBtn.addEventListener('click', getMealList);

  // get meal lsit that matches user input
  function getMealList(){
    let searchInputText = document.getElementById
    ('searchinput').ariaValueMax.trim();
    console.log(searchInputText);
  }


  return (
    <div className={styles.container}>
      <div className={styles.mealwrapper}>
        <div className={styles.mealsearch}>
            <h1 className={styles.title}>Find Meals by Ingredients</h1>
            <p>Need meal inspiration? Search for recipes based on the ingredients you have!</p>
            <div className={styles.mealsearchbox}>
                <input type="text" className={styles.searchcontent} placeholder='Enter an ingredient...' id="searchinput"></input>
                <button type="submit" className={styles.searchbtn} id='searchbtn'>Search</button>
            </div>
          </div>

          <div className={styles.mealresult}>
            <h2 className={styles.title}>Your Search Results:</h2>
              <div className={styles.meal} id='meal'>
                {/*-----meal begin-----*/}
                  <div className={styles.mealitem}>
                    <div className={styles.mealimg}>
                      <img src="https://www.allrecipes.com/thmb/JZsbJ8XNPxkbDk_hwHz-KI7nSKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219634-chef-johns-french-fries-DDMFS-4x3-338dec7976fc4d75bb3e2c18ff6a6e95.jpg" alt=""></img>
                    </div>

                    <div className={styles.mealname}>
                        <h2>Potato fries</h2>
                        <a href="#" className={styles.recipebtn}>Get Recipe</a>
                    </div>
                  </div>
                  {/*-----meal begin-----*/}
              </div>
          </div>

          <div className={styles.mealdetails}>
               {/*-----recipe close button-----*/}
               <button  type='button' className={`${styles.btn} ${styles.recipeclosebtn}`} 
               id='styles.recipeclosebtn'>
                <i>X</i>
               </button>

            <div className={styles.mealdetailscontent}>
              <h2 className={styles.recipetitle}>Meals Name Here</h2>
              <p  className={styles.recipecategory}>Category Name</p>
              <div className={styles.recipeinstruct}>
                <h3>Instructions: </h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p> LorenIpsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div class={styles.recipemealimg}>
                <img src="https://www.allrecipes.com/thmb/JZsbJ8XNPxkbDk_hwHz-KI7nSKk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/219634-chef-johns-french-fries-DDMFS-4x3-338dec7976fc4d75bb3e2c18ff6a6e95.jpg" alt=""></img>
              </div>
              <div className={styles.recipelink}>
                <a href="#" target="_blank">Watch Video</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}



export default FindMeals