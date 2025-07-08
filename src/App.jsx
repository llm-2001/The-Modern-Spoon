import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const recipes = [
  {
    title: "Creamy Garlic Chicken",
    image: "/images/creamy-garlic-chicken.jpg",
    description:
      "Juicy chicken breasts simmered in a rich garlic cream sauce, perfect with pasta or mashed potatoes.",
    recipe: {
      ingredients: [
        "2 large chicken breasts",
        "Salt and black pepper, to taste",
        "2 tbsp olive oil",
        "4 cloves garlic, minced",
        "1 cup heavy cream",
        "1/2 cup chicken broth",
        "1/2 cup grated Parmesan cheese",
        "1 tsp Italian seasoning",
        "Chopped parsley (for garnish)"
      ],
      steps: [
        "Season chicken breasts with salt and pepper.",
        "Heat olive oil in a large skillet over medium heat. Cook chicken 5–6 minutes per side, until golden and cooked through. Remove and set aside.",
        "In the same pan, add garlic and sauté 30 seconds.",
        "Add heavy cream, chicken broth, Parmesan, and Italian seasoning. Simmer 2–3 minutes until slightly thickened.",
        "Return chicken to the pan, spoon sauce over, and cook 2–3 minutes.",
        "Garnish with parsley and serve with pasta or mashed potatoes."
      ]
    }
  },
  {
    title: "Spicy Thai Noodle Bowl",
    image: "/images/thai-noodles.jpg",
    description:
      "A bold and vibrant bowl of rice noodles tossed with vegetables, peanuts, and a spicy sesame dressing.",
    recipe: {
      ingredients: [
        "8 oz rice noodles",
        "1 cup shredded carrots",
        "1 bell pepper, thinly sliced",
        "1 cup bean sprouts",
        "1/4 cup roasted peanuts, chopped",
        "2 green onions, sliced",
        "Fresh cilantro (for garnish)",
        "2 tbsp soy sauce",
        "2 tbsp sesame oil",
        "1 tbsp sriracha (more or less to taste)",
        "1 tbsp lime juice",
        "1 tbsp honey"
      ],
      steps: [
        "Cook rice noodles according to package instructions. Drain and set aside.",
        "In a small bowl, whisk together soy sauce, sesame oil, sriracha, lime juice, and honey.",
        "In a large bowl, combine noodles, carrots, bell pepper, bean sprouts, and green onions.",
        "Pour dressing over the mixture and toss well to combine.",
        "Top with roasted peanuts and cilantro. Serve warm or cold."
      ]
    }
  },
  {
    title: "Classic Blueberry Muffins",
    image: "/images/blueberry-muffins.jpg",
    description:
      "Moist, fluffy muffins bursting with fresh blueberries — ideal for breakfast or snacking.",
    recipe: {
      ingredients: [
        "1 1/2 cups all-purpose flour",
        "3/4 cup granulated sugar",
        "1/2 tsp salt",
        "2 tsp baking powder",
        "1/3 cup vegetable oil",
        "1 large egg",
        "1/3 cup milk",
        "1 tsp vanilla extract",
        "1 cup fresh or frozen blueberries"
      ],
      steps: [
        "Preheat oven to 400°F (200°C). Line a muffin tin with paper liners.",
        "In a large bowl, mix flour, sugar, salt, and baking powder.",
        "In a separate bowl, whisk oil, egg, milk, and vanilla. Add to dry ingredients and mix until just combined.",
        "Fold in blueberries gently.",
        "Divide batter evenly into muffin cups.",
        "Bake 18–20 minutes, until a toothpick comes out clean. Cool before serving."
      ]
    }
  }
];

export default function RecipeBlog() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to The Modern Spoon</h1>
        <p className="text-gray-600">
          Explore a curated selection of simple, wholesome, and flavorful recipes designed for modern home cooks.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <Card key={index} className="hover:shadow-lg transition">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-700">{recipe.description}</p>
              <Button onClick={() => setSelected(recipe)} className="w-full">
                View Recipe
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md shadow-xl">
            <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <p className="mb-4 text-gray-700">{selected.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {selected.recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Instructions</h3>
              <ol className="list-decimal list-inside space-y-1 text-gray-800">
                {selected.recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <Button variant="outline" onClick={() => setSelected(null)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
