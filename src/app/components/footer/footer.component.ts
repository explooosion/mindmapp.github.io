import {Component, Input, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {

    @Input() copyright: any;
    @Input() author: string;
    @Input() languages: string[];

    constructor(public translate: TranslateService) {
    }

    ngOnInit() {
    }

    setLanguage(language: string) {
        this.translate.use(language);
        localStorage.setItem("language", language);
    }

}
