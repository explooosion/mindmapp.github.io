import {Component, OnInit} from "@angular/core";
import {GithubService} from "../../services/github.service";
import {MmpService} from "../../services/mmp.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    title: string = "Mindmapp";

    downloadUrl: string = "https://github.com/Mindmapp/mindmapp/releases/download";

    version: string;
    status: string;

    releases: any;

    constructor(public github: GithubService,
                public mmp: MmpService) {
    }

    ngOnInit() {
        this.downloadUrl = this.github.getDownloadUrl();

        this.github.getLastVersion().then(version => {
            this.version = version;
        });

        this.mmp.init("mmp", {
            drag: false
        });

        this.mmp.getMap("example.mmp").then((data) => {
            this.mmp.createMap(data);
        });

        this.status = "Alpha";

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
