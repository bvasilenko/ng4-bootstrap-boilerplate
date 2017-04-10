import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: '', redirectTo: 'compare', pathMatch: 'full' },
    { path: 'compare', loadChildren: 'app/compare/compare.module#CompareModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
