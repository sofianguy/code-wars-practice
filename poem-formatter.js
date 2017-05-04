// You have a collection of lovely poems. Unfortuantely they aren't formatted
// very well. They're all on one line, like this:
// Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.

// What you want is to present each sentence on a new line, so that it looks
// like this:
// Beautiful is better than ugly.
// Explicit is better than implicit.
// Simple is better than complex.
// Complex is better than complicated.

// Write a function, format_poem() that takes a string like the one line example
// as an argument and returns a new string that is formatted across multiple
// lines with each new sentence starting on a new line when you print it out.

// Try to solve this challenge with the str.split() and the str.join()
// string methods.
// Every sentence will end with a period, and every new sentence will have
// one space before the previous period. Be careful about trailing whitespace
// in your solution.

function formatPoem(poem) {
  var output = '';
  for (var i=0; i<poem.length; i++) {
    if (i === poem.length-1) {
      output = output + poem[i];
    } else if (poem[i] === '.' && poem[i+1] === ' ') {
      output = output + poem[i] + '\n';
      i++;
    } else {
      output = output + poem[i];
    }
  }
  return output;
}


console.log(formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.'), 'Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.');
console.log(formatPoem("Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules."), "Flat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules.");
console.log(formatPoem("Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess."), "Although practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.");
console.log(formatPoem("There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you're Dutch. Now is better than never. Although never is often better than *right* now."), "There should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you're Dutch.\nNow is better than never.\nAlthough never is often better than *right* now.");
console.log(formatPoem("If the implementation is hard to explain, it's a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let's do more of those!"), "If the implementation is hard to explain, it's a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea -- let's do more of those!");
