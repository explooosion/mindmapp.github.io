import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GithubService {

    private readonly releaseUrl: string = "https://api.github.com/repos/Mindmapp/mindmapp/releases";
    private readonly downloadLink: string = "https://github.com/Mindmapp/mindmapp/releases/download";

    constructor(private http: HttpClient) {
    }

    getLastVersion(): Promise<any> {
        return this.http.get(this.releaseUrl).toPromise().then(data => data[0].name);
    }

    getDownloadUrl() {
        return this.downloadLink;
    }

}
