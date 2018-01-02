import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GithubService {

    url: string = "https://api.github.com/repos/Mindmapp/mindmapp/releases";

    constructor(private http: HttpClient) {
    }

    getLastVersion(): Promise<any> {
        return this.http.get(this.url).toPromise().then(data => data[0].name);
    }

}
