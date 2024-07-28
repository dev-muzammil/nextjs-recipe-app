import Image from "next/image";
import React from "react";

const RecipeDetail = async ({ params }) => {
  const recipeId = params.id;
  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const recipe = await res.json();
  console.log(recipe);
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={recipe.image}
              width={500}
              height={500}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-xm title-font text-gray-900 tracking-widest">
                Cuisine: {recipe.cuisine}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {recipe.name}
              </h1>

              <p className="leading-relaxed mt-4 text-gray-900 font-semibold">
                Preparation Time: {recipe.prepTimeMinutes}
              </p>
              <p className="leading-relaxed text-gray-900 font-semibold">
                Cooking Time: {recipe.cookTimeMinutes}
              </p>
              <p className="leading-relaxed text-gray-900 font-semibold">
                Difficulty: {recipe.difficulty}
              </p>
              <p className="leading-relaxed text-gray-900 font-semibold">
                Calories Per Serving: {recipe.caloriesPerServing}
              </p>
              <p className="leading-relaxed mt-2 text-gray-900">
                <span className="font-bold text-fuchsia-900">Recipe:</span> {recipe.instructions}
              </p>
              <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-semibold text-2xl text-gray-900">
                  Rating: {recipe.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetail;
