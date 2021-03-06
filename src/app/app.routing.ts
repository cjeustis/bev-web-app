import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { TempPlotRoutes } from './temp-plot/index';
import { SignUpRoute } from './signup/index';
import { SignInRoute } from './signin/index';
import { RecipesRoute, CreateRecipeRoute, UpdateRecipeRoute } from './recipes/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...TempPlotRoutes,
    ...SignUpRoute,
    ...SignInRoute,
    ...RecipesRoute,
    ...CreateRecipeRoute,
    ...UpdateRecipeRoute
];

export const routing = RouterModule.forRoot(appRoutes);
