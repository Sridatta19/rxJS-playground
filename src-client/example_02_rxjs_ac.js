
import $ from 'jquery'
import Rx from 'rxjs/Rx'

const $title = $("#title")
const $results = $("#results")

Rx.Observable.fromEvent($title, "keyup")
      .map(e => e.target.value)
      .distinctUntilChanged()
      .debounceTime(250)
      .switchMap(getItems)
      .subscribe(items => {
        $results.empty();
        $results.append(items.map(r => $('<li />').text(r)));
      });

function getItems(title){
  console.log(`Querying ${title}`);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve([title, "Item 2", `Another ${Math.random() }`]);
    }, 5 + (Math.random() * 2));
  })
}
