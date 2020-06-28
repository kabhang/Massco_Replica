import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class NodeService {
  getFileSystem(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private http: Http) {}

    getFilesystem() {
      debugger
        return this.http.get('./assets/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}
