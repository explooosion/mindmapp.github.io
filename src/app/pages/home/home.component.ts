import {Component, OnInit} from "@angular/core";
import {GithubService} from "../../services/github.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    title: string = "Mindmapp";

    release: any;

    status: string;

    constructor(public github: GithubService) {
    }

    ngOnInit() {
        this.github.getLatestRelease().then((release) => {
            this.release = release;
        });

        this.status = "Beta";
    }

}
