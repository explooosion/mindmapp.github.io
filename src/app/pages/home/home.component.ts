import {Component, OnInit} from "@angular/core";
import {GithubService} from "../../services/github.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

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
    }, {
        os: "Windows 32 bit",
        fileName: "mindmapp-windows-32.zip"
    }, {
        os: "Linux 32 bit",
        fileName: "mindmapp-linux-32.zip"
    }];

    constructor(public githubService: GithubService) {
    }

    ngOnInit() {
        this.githubService.getLastVersion().then(version => {
            this.version = version;
        });
    }

}
