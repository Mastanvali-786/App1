import { Component, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';


@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class headerComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}