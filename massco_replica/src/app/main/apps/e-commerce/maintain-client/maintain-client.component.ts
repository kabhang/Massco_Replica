import { Component, OnInit } from '@angular/core';
import { TreeNode } from './TreeNode';
import { NodeService } from './node-service.service';


@Component({
  selector: 'app-maintain-client',
  templateUrl: './maintain-client.component.html',
  styleUrls: ['./maintain-client.component.scss'],

})
export class MaintainClientComponent  implements OnInit {
  files: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
      debugger
        this.nodeService.getFileSystem().then(files => this.files = files);
    }


}

