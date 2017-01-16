import * as _ from 'lodash';

function Hello(){
    let coll = [0,1,2,3];
    let firstItem = _.first(coll);
    console.log('hello from main.ts: first item: ' + firstItem);
}
Hello();