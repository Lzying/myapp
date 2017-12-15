import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 路由模块。导进来就可以识别项目里面的所有路由路径，

import { LoginComponent } from './login.component';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
})
export class LoginModule { }
