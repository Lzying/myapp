import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StudentComponent } from './student.component';

import { StudentRoutes } from './student.routes';
import { from } from 'rxjs/observable/from';

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        RouterModule.forChild(StudentRoutes),
        HttpModule
    ],
    providers: [],
})
export class StudentModule { }
