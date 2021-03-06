import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    title: string;

    pages: any[];
    socials: any[];

    copyright: any;
    author: string;
    languages: any[];

    constructor(public translate: TranslateService) {
    }

    ngOnInit() {
        this.title = "Mindmapp";
        this.author = "Omar Desogus";

        this.pages = [{
            name: "DOWNLOADS",
            bookmark: "#releases"
        }];

        this.socials = [{
            name: "github",
            link: "https://github.com/Mindmapp"
        }, {
            name: "slack",
            link: "https://join.slack.com/t/mindmapp-org/shared_invite/enQtNDE4OTUwOTQ4OTc3LWRkZDExM2E5MTJlNzZhZDBjZTFhMzVjMDhjMDFhOTY0NjBkMzMwYjRiY2FmNWNiNjRiYzdhZmNjZDE4YzkwYjk"
        }];

        this.copyright = {
            name: "Copyright (c) 2018",
            link: "https://github.com/Mindmapp/mindmapp/blob/master/LICENSE.md"
        };

        this.languages = [{
            code: "it",
            icon: "it"
        }, {
            code: "en",
            icon: "gb"
        }, {
            code: "zh-tw",
            icon: "tw"
        }];

        this.setTranslations();
    }

    setTranslations() {
        let defaultLanguage = "en",
            storedLanguage = localStorage.getItem("language");

        if (storedLanguage) {
            defaultLanguage = storedLanguage;
        } else {
            let browserLanguage = this.translate.getBrowserLang();

            for (let language of this.languages) {
                if (language.code === browserLanguage) {
                    defaultLanguage = browserLanguage;
                    break;
                }
            }
        }

        this.translate.setDefaultLang(defaultLanguage);
        this.translate.use(defaultLanguage);
    }

}
