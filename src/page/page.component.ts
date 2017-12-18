import { Component } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {
    isShow = false;
    thisShow = false;
    SelectOnepage = true;
    SelectUser = false;
    SelectStudent = false;
    selectedOnepage(){
        this.SelectOnepage = true;
        this.SelectUser = false;
        this.SelectStudent = false;
    }
    selectedUser(){
        this.SelectOnepage = false;
        this.SelectUser = true;
        this.SelectStudent = false;
    }
    selectedStudent(){
        this.SelectOnepage = false;
        this.SelectUser = false;
        this.SelectStudent = true;
    }
}
