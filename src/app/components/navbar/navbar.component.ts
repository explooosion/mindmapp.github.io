import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

    @Input() title: string;
    @Input() pages: any[];
    @Input() socials: any[];

    constructor() {
    }

    ngOnInit() {
    }

    slide(bookmark: string, event: Event) {
        if (bookmark) {
            event.preventDefault();

            window.document.querySelector(bookmark).scrollIntoView({
                behavior: "smooth"
            });
        }
    }

}
