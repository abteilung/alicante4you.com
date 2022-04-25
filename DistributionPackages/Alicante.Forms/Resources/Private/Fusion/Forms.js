// import Choices from 'choices.js'; 

const orderItems = document.getElementById('formOrder');
window.choices = new Choices(orderItems, {
    // maxItems: 20,
    delimiter: ',',
    addItems: true,
    editItems: false,
    maxItemCount: -1,
    removeItems: true,
    removeItemButton: true,
    duplicateItemsAllowed: false,
    // initialize choices with values of local storage
    items: localStorage.getItem('orderValue') ? (localStorage.getItem('orderValue').length ? localStorage.getItem('orderValue').split(',') : [] ) : []
  });

// event when choices removes or adds manually a element to choices object / modified input field
orderItems.addEventListener(
  'change',
  function(event) {
    localStorage.setItem('orderValue', document.getElementById('formOrder').value);
  },
  false,
);

orderItems.addEventListener(
  'removeItem',
  function(id, value, label, customProperties, groupValue){
    let event = new CustomEvent('item-removed', {
      element: {
        id: id,
        value: value,
        label: label,
        groupValue: groupValue,
        customProperties: customProperties
      }
    });
    window.dispatchEvent(event);
  },
  false,
);

// event when Alpine adds an item (over button) to the input layer beneth choices and dispaches an event
window.addEventListener('item-added', function(e){
  var title = document.querySelector('h1 .productTitle').innerText.replace(/,\s*/g, '-'),
      formOrder = document.getElementById('formOrder').value;

    // console.log(title);
    // console.log(formOrder);
    // console.log(localStorage.getItem('orderValue'));
      
  if(!formOrder.split(',').includes(title) ){
    window.choices.setValue([{
      value: document.querySelector('h1 .productTitle').innerText.replace(/,\s*/g, '-'),
      label: document.querySelector('h1 .productTitle').innerText.replace(/,\s*/g, '-'),
      customProperties: {
        theme: document.body.dataset.theme || 'default'
      }
    }]);
  }

});

// choices.setValue([{
//         value: document.getElementsByTagName('h1')[0].innerText || document.title,
//         label: document.getElementsByTagName('h1')[0].innerText || document.title,
//         customProperties: {
//           theme: document.body.dataset.theme || 'default'
//         }
//       }]);

// choices.setValue([{
//   value: document.getElementsByTagName('h1')[0].innerText || document.title,
//   label: document.getElementsByTagName('h1')[0].innerText || document.title,
//   customProperties: {
//     theme: document.body.dataset.theme || 'default'
//   }
// }]);


// const element = document.querySelector('#select');
// const choices = new Choices(element);

// choices.setChoices([
//   {label:'Choice 1', value:'1'},
//   {label:'Choice 2', value:'2'},
//   {label:'Choice 3', value:'3', selected:true},
// ], undefined, undefined, true);

// choices.setChoices([
//   {label:'Choice 1', value:'1'},
//   {label:'Choice 2', value:'2', selected:true},
//   {label:'Choice 3', value:'3'},
// ], undefined, undefined, true);

// var secondElement = new Choices('#choosenOnes', { allowSearch: true }).setValue(['Set value 1', 'Set value 2']);

// const element = document.getElementById('order-form-order')
// const example = new Choices(element, {
//     choices: [
//       { value: 'One', label: 'Label One' },
//       { value: 'Two', label: 'Label Two', disabled: true },
//       { value: 'Three', label: 'Label Three' },
//     ],
//   });
  
// example.setChoiceByValue('Two'); // Choice with value of 'Two' has now been selected.

//   // Pass reference
//   const choices = new Choices('[data-trigger]');
//   const choices = new Choices('#order-form-order');

// document.getElementById('order-form-order').choices.setValue([{value: 2, label: "Two"}]

// var elChoice = document.querySelector('#order-form-order');
// var choicesInstance = Choices(elChoice);
// choicesInstance.setValue(['Set value 1', 'Set value 2']);

//   if (document.querySelector('.cart-add-itemxxxx')) {
//     Array.from(document.querySelectorAll('.cart-add-item')).forEach(
//       element => new Choices(element, {
//         search: false,
//         itemSelectText: '',
//         shouldSort: false
//       }));
//   }
  
//   // Passing options (with default options)
//   const choices = new Choices(element, {
//     silent: false,
//     items: [],
//     choices: [],
//     renderChoiceLimit: -1,
//     maxItemCount: -1,
//     addItems: true,
//     addItemFilter: null,
//     removeItems: true,
//     removeItemButton: false,
//     editItems: false,
//     allowHTML: true,
//     duplicateItemsAllowed: true,
//     delimiter: ',',
//     paste: true,
//     searchEnabled: true,
//     searchChoices: true,
//     searchFloor: 1,
//     searchResultLimit: 4,
//     searchFields: ['label', 'value'],
//     position: 'auto',
//     resetScrollPosition: true,
//     shouldSort: true,
//     shouldSortItems: false,
//     placeholder: true,
//     placeholderValue: null,
//     searchPlaceholderValue: null,
//     prependValue: null,
//     appendValue: null,
//     renderSelectedChoices: 'auto',
//     loadingText: 'Loading...',
//     noResultsText: 'No results found',
//     noChoicesText: 'No choices to choose from',
//     itemSelectText: 'Press to select',
//     addItemText: (value) => {
//       return `Press Enter to add <b>"${value}"</b>`;
//     },
//     maxItemText: (maxItemCount) => {
//       return `Only ${maxItemCount} values can be added`;
//     },
//     valueComparer: (value1, value2) => {
//       return value1 === value2;
//     },
//     classNames: {
//       containerOuter: 'choices',
//       containerInner: 'choices__inner',
//       input: 'choices__input',
//       inputCloned: 'choices__input--cloned',
//       list: 'choices__list',
//       listItems: 'choices__list--multiple',
//       listSingle: 'choices__list--single',
//       listDropdown: 'choices__list--dropdown',
//       item: 'choices__item',
//       itemSelectable: 'choices__item--selectable',
//       itemDisabled: 'choices__item--disabled',
//       itemChoice: 'choices__item--choice',
//       placeholder: 'choices__placeholder',
//       group: 'choices__group',
//       groupHeading: 'choices__heading',
//       button: 'choices__button',
//       activeState: 'is-active',
//       focusState: 'is-focused',
//       openState: 'is-open',
//       disabledState: 'is-disabled',
//       highlightedState: 'is-highlighted',
//       selectedState: 'is-selected',
//       flippedState: 'is-flipped',
//       loadingState: 'is-loading',
//       noResults: 'has-no-results',
//       noChoices: 'has-no-choices'
//     },
//     // Choices uses the great Fuse library for searching. You
//     // can find more options here: https://fusejs.io/api/options.html
//     fuseOptions: {
//       includeScore: true
//     },
//     labelId: '',
//     callbackOnInit: null,
//     callbackOnCreateTemplates: null
//   });
