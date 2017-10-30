import {Component} from "@angular/core";
import {GithubService} from "./github.service";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent {

    github: string = "https://github.com/Mindmapp";

    map: string = "https://raw.githubusercontent.com/Mindmapp/mindmapp/master/src/assets/map.png";

    title: string = "Mindmapp";
    description: string = "Draw quickly your mind maps";

    releases = [{
        os: "Windows 64 bit",
        link: ""
    }, {
        os: "Linux 64 bit",
        link: ""
    }];

    constructor(public githubService: GithubService) {
        this.githubService.getLastRelease().then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error.json());
        });
    }

}
