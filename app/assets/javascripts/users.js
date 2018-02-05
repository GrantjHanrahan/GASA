
// $(document).ready(function(){
// console.log('runnin M');

// $('#searchM').on('click', function(e){
//   e.preventDefault();
//   // console.log('search button clicked');
//   let query = $('#query').val();
//   $('#results').empty();
//
//   $.ajax({
//     url:
//       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+query+"&api_key=<%=Rails.application.secrets.mars_api_key%>",
//     data: {
//       q: query
//     }
//   })
//   .done(function(data){
//     console.log(data)
//     $('<a>').on('click', function(e){
//       e.preventDefault();
//       console.log('link clicked');
//     })
//
//     data.photos.forEach(function(elem){
//       let image = elem.img_src;
//       $('<h2>').html(elem.rover.name).appendTo('#results');
//       $('<h3>').html(elem.id).appendTo('#results');
//       $('<h4>').html(`Sol: ${elem.sol}<br>Earth Date: ${elem.earth_date}`).appendTo('#results');
//       $('<h5>').html(elem.camera.full_name).appendTo('#results');
//       // $('<img src>').html(elem.img_src).appendTo('#results');
//       $('#results').append("<img src="+image+"></img>");
//       // $('#results').append("<a href="+image+">View Image</a>");
//       $('<hr/>').appendTo('#results');
//     });
//
//
//
//   })
//   .fail(function(err){
//     // console.error(err)
//     console.warn(err)
//     $('<h1>').html(err.responseText).appendTo('#results');
//   });
//
//
//
//   });

// });
