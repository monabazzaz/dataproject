// var dataArray1 = ['australia', 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015]
//
// $( document ).ready(function() {
//   loadData("australia.json");
//   //buildChart();
// });
// function loadData(dataURL){
//
//   $.ajax({
//   method: "GET",
//   url: dataURL,
//   dataType: "json",
//   success: parseData
// });
//
// }
//
// function parseData(data){
//   console.log(data);
//   console.log(data.yearLiters[0].liters);
//   dataArray1 = ["liters"];
//
//   $.each(data.yearLiters, function(i, item) {
//     console.log(i);
//     console.log(item);
//     dataArray1.push(parseFloat(item.liters))
//
// })
//
//
//   buildChart();
// }
//
// function buildChart(){
//   console.log(dataArray1);
//
// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       x='years',
//       columns:
//       ['years', 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015]
//       },
//
//     axis: {
//       y: {
//         label: {
//           text: 'Liters per Capita',
//           position: 'outer-middle'
//         },
//         tick: {
//           format: d3.format("") // ADD
//         }
//       },
//       y2: {
//           show: false,
//           label: {
//             text: 'Y2 Label',
//             position: 'outer-middle'
//           }
//         }
//       }
//   });
//
//   }

// var dataArray1 = ['australia', 9.3, 10, 11.6, 12.9, 12.7, 11.8, 10.6, 10.2, 10.5, 10.3]
//
// $( document ).ready(function() {
//   loadData("australia.json");
//   //buildChart();
// });
// function loadData(dataURL){
//
//   $.ajax({
//   method: "GET",
//   url: dataURL,
//   dataType: "json",
//   success: parseData
// });
//
// }
// function parseData(data){
//   console.log(data);
//   console.log(data.yearLiters[0].liters);
//   dataArray1 = ["Liters:"];
//
//   $.each(data.yearLiters, function(i, item) {
//     console.log(i);
//     console.log(item);
//     dataArray1.push(parseFloat(item.liters))
//
// })
//
//
//   buildChart();
// }
//
// function buildChart(){
// console.log(dataArray1);
//
// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       x:'years',
//       columns: [
//         ['years', 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],
//       ]
//
//         y: 'australia',
//           columns [
//             ['australia', 9.3, 10, 11.6, 12.9, 12.7, 11.8, 10.6, 10.2, 10.5, 10.3],
//           ]
//           label: {
//             text: 'Liters per Capita',
//             position: 'outer-middle'
//           },
//         color: {
//           pattern: ['#2B6D91']
//         },
//
//       }
//
//
//     }
//   });
// }

// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//       columns: [
//         ['data1', 9.3, 9.4, 9.5, 9.8, 10.1, 10, 10.3, 10.8, 11.1, 11.6, 11.6, 11.6, 12.2, 12.9, 13.1, 12.9, 13.1, 13, 12.7, 12.7, 12.7, 12.8, 12.4, 12.2, 11.7, 11.8, 11.3, 11.4, 11.3, 11, 10.6, 10.1, 9.9, 10.2, 10, 9.8, 10, 10.2, 10, 10, 10.2, 10, 10.4, 10.3, 10.5, 10.5, 10.8, 10.8, 10.6, 10.5, 10.3, 10, 9.9, 9.7]
//       ]
//     }
// });
// require.config({
//   baseUrl: '/js',
//   paths: {
//     d3: "http://d3js.org/d3.v3.min"
//   }
// });
//
// require(["d3", "c3"], function(d3, c3) {
//   c3.generate({
//
//   });
// });
// 9.3, 10, 11.6, 12.9, 12.7, 11.8, 10.6, 10.2, 10.5, 10.3

var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            ['x', 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],
            ['Liters', 9.3, 10, 11.6, 12.9, 12.7, 11.8, 10.6, 9.8, 10.2, 10.5, 10.3]
        ]
    },
    axis: {

        y: {
            max: 15,
            min: 0,
            // Range includes padding, set 0 if no padding needed
            // padding: {top:0, bottom:0}
            label: {
              text: 'Liters per Capita',
              position: 'outer-middle'
                      },
        }
    }
});

// var chart = c3.generate({
//     data: {
//         x: 'x',
//         columns: [
//             ['x', 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],
//             ['Liters', 8.9, 11.6, 13.4, 14.1, 13.6, 13.3, 13.9, 13.4, 13.2, 12.4, 12.1]
//         ]
//     },
//     axis: {
//
//         y: {
//             max: 15,
//             min: 0,
//             // Range includes padding, set 0 if no padding needed
//             // padding: {top:0, bottom:0}
//             label: {
//               text: 'Liters per Capita',
//               position: 'outer-middle'
//                       },
//         }
//     }
// });

$(document).ready(function() {

    $('#ammount').DataTable( {
        "ajax": 'data1.json'
    } );
} );
