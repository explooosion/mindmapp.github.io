import {Component, OnInit} from "@angular/core";
import {MmpService} from "../../services/mmp.service";

@Component({
    selector: "app-map",
    templateUrl: "./map.component.html",
    styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {

    map: any;

    constructor(public mmp: MmpService) {
    }

    ngOnInit() {
        this.mmp.create("mmp", {
            centerOnResize: false
        });

        this.map = this.mmp.getMapInstance();

        this.mmp.addNewMap("example.mmp");
    }

}
