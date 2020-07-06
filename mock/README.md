# fullstack-test

1. set up [NextJS](https://nextjs.org/) project
2. use [material ui](https://material-ui.com/) to display systems list (from systems.json)
   - show name, type, site and status on each entry
   - in case system has children, display them under the parent system
   - clicking on system entry will show the system chart
3. use [highCharts](https://github.com/highcharts/highcharts-react) to display the chart of each system
   - use charts mocks to simulate analytics of each system
   - the chart mock is per system type
   - chart can appear in separate route, modal, expansion-panel or any other UI that you choose
