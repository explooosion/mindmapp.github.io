import {Component} from "@angular/core";
import {GithubService} from "./github.service";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent {

    githubLink: string = "https://github.com/Mindmapp";
    downloadLink: string = "https://github.com/Mindmapp/mindmapp/releases/download/";
    mapLink: string = "https://raw.githubusercontent.com/Mindmapp/mindmapp/master/src/assets/map.png";

    title: string = "Mindmapp";
    description: string = "Draw quickly your mind maps";

    version: string;
    status: string = "pre-release";

    releases = [{
        os: "Windows 64 bit",
        fileName: "mindmapp-windows-64.zip"
    }, {
        os: "Linux 64 bit",
        fileName: "mindmapp-linux-64.zip"
    }];

    constructor(public githubService: GithubService) {
        this.githubService.getLastVersion().then(version => {
            this.version = version;
        });
    }

}
