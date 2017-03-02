import {Component, OnInit} from "@angular/core";
import {DataService} from "../../shared/data.service";
import {UtilityService} from "../../shared/utility.service";

@Component({
  selector: 'c2s-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalProviders: number = 0;

  constructor(private dataService: DataService,
              private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.dataService.getProviders()
      .subscribe(res => {
        this.totalProviders = res.length;
      });
  }

  navigateTo(url: string) {
    this.utilityService.navigateTo(url);
  }
}