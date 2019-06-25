import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';

const routes:Routes = [{
	path: '',
	component: HomeComponent
}, {
	path: 'features',
	component: FeaturesComponent
}, {
	path: 'resources',
	component: ResourcesComponent
}, {
	path: 'events',
	component: EventsComponent
}]

@NgModule({
	declarations: [],
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
	
}