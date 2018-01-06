import {Component, OnInit} from "@angular/core";
import {MmpService} from "../../services/mmp.service";

@Component({
    selector: "app-map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {

    constructor(public mmp: MmpService) {
    }

    ngOnInit() {
        this.mmp.init("mmp", {
            "drag": false,
            "center-onresize": false
        });

        this.mmp.getMap("example.mmp").then((data) => {
            this.mmp.createMap(data);
        });
    }

}
