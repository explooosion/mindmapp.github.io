import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-donate",
    templateUrl: "./donate.component.html",
    styleUrls: ["./donate.component.scss"]
})
export class DonateComponent implements OnInit {

    ethereumWallet: string;

    constructor() {
    }

    ngOnInit() {
        this.ethereumWallet = "0x03Ed9bE36c5FC315B0559Cf344801653e2CE292f";
    }

}
