import {Component, Input, OnInit} from "@angular/core";
import {GithubService} from "../../services/github.service";

@Component({
    selector: "app-releases",
    templateUrl: "./releases.component.html",
    styleUrls: ["./releases.component.scss"]
})
export class ReleasesComponent implements OnInit {

    @Input() version: String;

    releases: any;

    downloadUrl: string;

    constructor(public github: GithubService) {
    }

    ngOnInit() {
        this.downloadUrl = this.github.getDownloadUrl();

        this.releases = {
            windows: {
                os: "Windows",
                architectures: ["32", "64"]
            },
            linux: {
                os: "Linux",
                architectures: ["32", "64"]
            }
        };
    }

    getPath(os: string, architecture: string) {
        return `${this.downloadUrl}/${this.version}/mindmapp-${os.toLowerCase()}-${architecture}.zip`;
    }

}
