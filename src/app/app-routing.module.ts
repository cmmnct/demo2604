import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemorygameComponent } from './memorygame/memorygame.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  { path: 'colorpicker', component: ColorpickerComponent },
  { path: 'memorygame', component: MemorygameComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
