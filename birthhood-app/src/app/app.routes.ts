import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'todo-advanced-directive', loadChildren: './+todo-advanced-directive#TodoAdvancedDirectiveModule', data: { title: 'Directives' } },
  {
    path: 'todo-advanced-errorhandling', loadChildren: './+todo-advanced-errorhandling#TodoAdvancedErrorhandlingModule',
    data: { title: 'Errorhandling' }
  },
  {
    path: 'todo-advanced-generic-service', loadChildren: './+todo-advanced-generic-service#TodoAdvancedGenericServiceModule',
    data: { title: 'Generic Service' }
  },
  {
    path: 'todo-advanced-forms-reactive', loadChildren: './+todo-advanced-forms-reactive#TodoAdvancedFormsReactiveModule',
    data: { title: 'Reactive Forms' }
  },
  {
    path: 'todo-advanced-forms-template', loadChildren: './+todo-advanced-forms-template#TodoAdvancedFormsTemplateModule',
    data: { title: 'Template Forms' }
  },
  { path: 'todo-advanced-pipe', loadChildren: './+todo-advanced-pipe#TodoAdvancedPipeModule', data: { title: 'Pipes' } },
  { path: 'todo-advanced-routing', loadChildren: './+todo-advanced-routing#TodoAdvancedRoutingModule', data: { title: 'Routing' } },
  {
    path: 'todo-advanced-templating', loadChildren: './+todo-advanced-templating#TodoAdvancedTemplatingModule',
    data: { title: 'Advanced Templating' }
  },
  { path: 'todo-advanced-translate', loadChildren: './+todo-advanced-translate#TodoAdvancedTranslateModule', data: { title: 'Translate' } },
  { path: 'todo-aot', loadChildren: './+todo-aot#TodoAoTModule', data: { title: 'Todo AoT' } },
  { path: 'todo-single-component', loadChildren: './+todo-single-component#TodoSingleComponentModule', data: { title: 'Todo Single Component' } },
  { path: 'todo-onpush', loadChildren: './+todo-onpush#TodoOnPushModule', data: { title: 'Todo OnPush' } },
  { path: 'todo-mvc', loadChildren: './+todo-mvc#TodoMvcModule', data: { title: 'Todo MVC' } },
  { path: 'todo-mvc-s', loadChildren: './+todo-mvc-s#TodoMvcPlusServiceModule', data: { title: 'Todo MVC + S' } },
  { path: 'todo-flux', loadChildren: './+todo-flux#TodoFluxModule', data: { title: 'Todo Flux' } },
  { path: 'todo-redux', loadChildren: './+todo-redux#TodoReduxModule', data: { title: 'Todo Redux' } },
  { path: 'todo-rxjs-redux', loadChildren: './+todo-rxjs-redux#TodoRxjsReduxModule', data: { title: 'Todo Rxjs Redux' } },
  { path: 'about', loadChildren: './+about#AboutModule', data: { title: 'About' } },
  { path: '**', component: NoContentComponent },
];