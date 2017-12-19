import { FormPersonelComponent } from './components/form/form-personel/form-personel.component';
import { FormUmfeldComponent } from './components/form/form-umfeld/form-umfeld.component';
import { UIRouter } from '@uirouter/angular';
import { FormFlowService } from './services/form-flow.service';
import { Injector } from '@angular/core/src/di/injector';



export const appStates = [

    { name: 'personel', url: '/personel', component: FormPersonelComponent, onEnter: verifyFormFlow },

    { name: 'umfeld', url: '/umfeld', component: FormUmfeldComponent, onEnter: verifyFormFlow }
];

/** UIRouter Config  */
export function UIRouterConfigFn(router: UIRouter, injector: Injector) {
    // If no URL matches, go to the `personal` state's name by default
    router.urlService.rules.otherwise({ state: 'personel' });
}


function verifyFormFlow(transition, state) {
    console.log("Entered '" + state.name + "' state.");

    var $stateService = transition.router.stateService;
    var formFlowService = transition.injector().get(FormFlowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    let firstState = formFlowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log("Redirected to '" + firstState + "' state which it is the first invalid step.");
        return $stateService.target(firstState);
    };
}