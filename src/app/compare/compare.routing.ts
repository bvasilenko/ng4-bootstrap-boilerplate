import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparePage } from "./compare.page";

const routes: Routes = [
    { path: '', component: ComparePage },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
