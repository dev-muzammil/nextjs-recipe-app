import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";

async function fetchRecipeList() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data?.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeList = async () => {
  const recipeList = await fetchRecipeList();
  return (
    <>
      <h1 className="text-center font-bold text-3xl my-3 underline text-fuchsia-950">
        All Delicious Recipes
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4">
        {recipeList.map((recipe) => {
          return (
            <div className="mx-auto" key={recipe.id}>
              <Link href={`/recipe-list/${recipe.id}`}>
                <Card
                  
                  className="max-w-sm"
                  imgAlt={recipe.name}
                  imgSrc={recipe.image}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {recipe.name}
                  </h5>
                  <div className=" flex justify-between flex-col md:flex-row">
                    <p className="font-semibold text-gray-900 dark:text-gray-400">
                      {recipe.cuisine}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-gray-400">
                      Rating: {recipe.rating}
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecipeList;
