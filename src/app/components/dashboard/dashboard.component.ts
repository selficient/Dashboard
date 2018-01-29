import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatabaseService]
})
export class DashboardComponent implements OnInit {

  houseData: Hardware[] = [];
  actionlog: ActionlogItem[];
  detailsVisable: Boolean = false;
  hardwareDetail: Hardware;

  constructor(private databaseService: DatabaseService) {

  }

  ngOnInit() {
    this.getHardware();
    this.getActionLog();
  }

  // Retrieves data from MongoDB database
  getHardware(): void {
    this.databaseService.fetchHardware().subscribe(data => {
      console.log(data);
      this.houseData = data;
    });
  }
  // Retrieves data from MongoDB database
  getActionLog(): void {
    this.databaseService.fetchActionLog().subscribe(data => {
      console.log(data);
      this.actionlog = data;
      console.log(this.actionlog);
    });
  }

  refreshData(): void {
    this.getHardware();
    this.getActionLog();
  }
  showDetails(id: number): void {

  }
}

interface Hardware {
  id: string;
  name: string;
  interactions: Interaction[];
  state: State[];
}

interface Interaction {
  name: string;
  actions: Action[];
}

interface Action {
  description: string;
  code: string;
}

interface State {
  name: string;
  state: string;
}

interface ActionlogItem {
  hardwareID: string;
  hardwareName: string;
  date: string;
  action: string;
  state: string;
}
