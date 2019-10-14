/*
Given a pivot 'x', and a list 'lst', partition the list into three parts.
  * The first part contains all the elements in 'lst' that are less than 'x'
  * The second part contains alll elements in 'lst' that are equal to 'x'
  * The third part contains all elements in 'lst' that are larger than 'x'
lst = [9, 12, 3, 5, 14, 10, 10]    
*///-------------------------------------------------------------------------

function pivotListOn(x, lst) {
    let less = [];
    let equal = [];
    let more = [];
    lst.forEach(i => {
        if (i < x) less.push(i);
        else if (i == x) equal.push(i);
        else more.push(i); 
    });
    lst = less.concat(equal).concat(more);

    return lst;
}

console.log(pivotListOn(9, [9, 4, 2, 90, 56, 6, 19, 4, 6]));