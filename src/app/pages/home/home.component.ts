import {Component, OnInit} from "@angular/core";
import {GithubService} from "../../services/github.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    title: string = "Mindmapp";

    version: string;
    status: string;

    constructor(public github: GithubService) {
    }

    ngOnInit() {
        this.github.getLastVersion().then(version => {
            this.version = version;
        });

        this.status = "Alpha";
    }

}
