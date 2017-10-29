import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService {

    url: string = "https://api.github.com/repos/Mindmapp/mmp/releases";

    constructor(private http: Http) {
    }

    getLastRelease(): Promise<any> {
        return this.http.get(this.url).map(response => response.json()).toPromise();
    }

}
