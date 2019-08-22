import _ from 'lodash';

// export function paginate(items, pageNumber, pageSize) {
//     const startIndex = (pageNumber - 1) * pageSize;
//     return _.items
//         .slice(startIndex)
//         .take(pageSize)
//         .value();
// }

export function paginate(items, pageNumber, pageSize) {
   const startIndex = (pageNumber - 1) * pageSize;
   //_.slice(items, startIndex);
   //_.take()

      
   console.log(_.slice(items,2));
   console.log(_(items).slice(startIndex).take(pageSize).value());
   return _(items).slice(startIndex).take(pageSize).value();
}