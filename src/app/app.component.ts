import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box!';
  recipes: Recipe[] = [
    new Recipe('The Best Easy Beef and Broccoli Stir-Fry', 'Broccoli, beef, water,onions', 'In a bowl, combine 2 tablespoons cornstarch, 2 tablespoons water and garlic powder until smooth .Add beef and toss.In a large skillet or wok over medium high heat, stir-fry beef in 1 tablespoon oil until beef reaches desired doneness; remove and keep warm.Stir-fry broccoli and onion in remaining oil for 4-5 minutes.Return beef to pan.Combine soy sauce, brown sugar, ginger and remaining cornstarch and water until smooth; add to the pan.Cook and stir for 2 minutes.Serve over rice.', 5),
    new Recipe('Stinky Tofu', 'Tofu, oil', 'Heat wok over a high flame.Add the vegetable oil.When the oil is hot enough that a splash of water or flour causes it to sizzle, its frying time.Carefully place the tofu slices into the oil, and gently stir to make sure they dont stick together.Let fry,stirring occasionally, for two minutes (it will start to smell!)', 5)
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string, public rating: number){ }
}
