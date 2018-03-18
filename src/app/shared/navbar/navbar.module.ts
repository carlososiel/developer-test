import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@NgModule({
	imports: [ SharedModule ],
	declarations: [ NavbarComponent ],
	exports: [ NavbarComponent ]
})
export class NavbarModule {}
