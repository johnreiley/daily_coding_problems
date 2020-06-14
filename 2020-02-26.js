/*
Write a program that takes in an array of integers representing byte values,
and returns whether it is a valid UTF-8 encoding.
*/

function isValidUtf8Encoding( /* int[] */ bytes) {
  if (!bytes) {
    return false;
  }

  if (bytes.length === 8 && bytes[0] === 0) {
    return true;
  } else if (bytes.length === 16 || bytes.length === 24 || bytes.length === 32) {
    let n = bytes.length / 8;


  } else {
    return false;
  }

  switch (bytes.length) {
    case 8:
      return (bytes[0] === 0) ? true : false;
    case 16:

    case 24:

    case 32:

    default:
      return false;
  }
}