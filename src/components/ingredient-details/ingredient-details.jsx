import PropTypes from 'prop-types';
import stylesIngredientDetails from './ingredient-details.module.css';

const IngredientDetails = ({ ingredient }) => {
  if (!ingredient) {
    return null;
  }

  return (
    <>
      <h1 className={`${stylesIngredientDetails.title} text text_type_main-large`}>Детали ингредиента</h1>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <h2 className={`${stylesIngredientDetails.name} mt-4 mb-8 text text_type_main-medium`}>{ingredient.name}</h2>
      <ul className={`${stylesIngredientDetails.list}`}>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <span className={`${stylesIngredientDetails.data} text text_type_digits-default text_color_inactive`}>{ingredient.calories}</span>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <span className={`${stylesIngredientDetails.data} text text_type_digits-default text_color_inactive`}>{ingredient.proteins}</span>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <span className={`${stylesIngredientDetails.data} text text_type_digits-default text_color_inactive`}>{ingredient.fat}</span>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <span className={`${stylesIngredientDetails.data} text text_type_digits-default text_color_inactive`}>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </>
  )
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    image_large: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }).isRequired,
};

export default IngredientDetails;