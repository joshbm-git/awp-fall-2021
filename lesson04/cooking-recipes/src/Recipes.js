import { Link } from "@reach/router";

function Recipes(props) {
  const { data } = props;

  return (
    <>
      <h3>List</h3>
      <ol>
        {
          data.map( recipe => <li>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li> )
        }
      </ol>
    </>
  );
}

export default Recipes;
