import { Component, Injector, ChangeDetectionStrategy } from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import { appModuleAnimation } from "@shared/animations/routerTransition";
import { ChartData, ChartOptions } from "chart.js";

@Component({
  templateUrl: "./home.component.html",
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends AppComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }

  title(title: any) {
    throw new Error("Method not implemented.");
  }

  salesData: ChartData<"line"> = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Absent",
        data: [5, 4, 5, 7, 5, 5, 3, 8, 6, 5, 4, 3],
        tension: 0.5,
      },
      {
        label: "Remote",
        data: [5, 4, 5, 7, 5, 5, 3, 8, 6, 5, 4, 3],
        tension: 0.5,
      },
      {
        label: "Leave",
        data: [1, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1],
        tension: 0.5,
      },
      {
        label: "Joined",
        data: [3, 1, 2, 1, 1, 3, 2, 4, 2, 5, 6, 2],
        tension: 0.5,
      },
      {
        label: "Employees",
        data: [60, 60, 59, 56, 61, 65, 70, 80, 85, 90, 100, 120],
        tension: 0.5,
      },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Data",
      },
    },
  };
}
