// import Isotope from 'isotope-layout';
// import matchesSelector from 'matches-selector';

// // filter functions
//   // store filter for each group
//   var filters = {};
  
//   // init Isotope
//   var iso = new Isotope( '.filterContent', {
//     layoutMode: 'fitRows',
//     percentPosition: true,
//     itemSelector: '.grid-item',
//     fitRows: {
//       columnWidth: '.grid-sizer',
//       gutter: '.gutter-sizer'
//     }
//   })
  
  
// // bind filter button click
// var filtersElem = document.querySelector('#filterContainer');
// filtersElem.addEventListener('click', function( event ) {
//   // only work with buttons
//   if ( !matchesSelector( event.target, 'button' )) {
//     return;
//   }
//   var filterValue = event.target.getAttribute('data-filter');
//   // use matching filter function
//   iso.arrange({ filter: filterValue });
// });

// // bind filter select change
// var filterMobile = document.querySelector('#filterContainer select')
// filterMobile.addEventListener('change', function( event ) {

//   selected = event.target.options[event.target.selectedIndex];
//   // only allow options
//   if ( !matchesSelector( selected, 'option' )) {
//     return;
//   }
//   var filterValue = selected.getAttribute('data-filter');
//   iso.arrange({ filter: filterValue });
// });

//   // change mixitup-control-active class on buttons
//   var buttonGroups = document.querySelectorAll('.filterButton');
//   for ( var i=0; i < buttonGroups.length; i++ ) {
//     var button = buttonGroups[i];
//     radioButtonGroup( button );
//   }
  
//   function radioButtonGroup( button ) {
//     button.addEventListener( 'click', function( event ) {
//       // only work with buttons
//       if ( !matchesSelector( event.target, 'button' ) ) {
//         return;
//       }

//       var parent,
//           actives = document.querySelectorAll('.mixitup-control-active');

//       // remove all active classes    
//       actives.forEach(active => {
//         active.classList.remove('mixitup-control-active');
//       });

//       // add class to event target
//       event.target.classList.add('mixitup-control-active');
      
//       // add class to parent if applies
//       parent = document.querySelector('.mixitup-control-active').closest('.filter-box');
//       if(parent){
//         parent.querySelector('.flex .filterButton').classList.add('mixitup-control-active');
//       }

//     });
//   }