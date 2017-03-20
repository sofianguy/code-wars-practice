// Laura really hates people using acronyms in her office and wants to force
// her colleagues to remove all acronyms before emailing her. She wants you
// to build a system that will edit out all known acronyms or else will notify
// the sender if unknown acronyms are present.

// Any combination of three or more letters in upper case will be considered
// an acronym. Acronyms will not be combined with lowercase letters, such as
// in the case of 'KPIs'. They will be kept isolated as a word/words within a string.

// For any string:
// All instances of 'KPI' must become "key performance indicators"
// All instances of 'EOD' must become "the end of the day"
// All instances of 'TBD' must become "to be decided"
// All instances of 'WAH' must become "work at home"
// All instances of 'IAM' must become "in a meeting"
// All instances of 'OOO' must become "out of office"
// All instances of 'NRN' must become "no reply necessary"
// All instances of 'CTA' must become "call to action"
// All instances of 'SWOT' must become "strengths, weaknesses, opportunities and threats"

// If there are any unknown acronyms in the string, Laura wants you to return
// only the message:
// '[acronym] is an acronym. I do not like acronyms. Please remove them from
// your email.'

// So if the acronym in question was 'BRB', you would return the string:
// 'BRB is an acronym. I do not like acronyms. Please remove them from your email.'

// If there is more than one unknown acronym in the string, return only the
// first in your answer.

// If all acronyms can be replaced with full words according to the above,
// however, return only the altered string.

// If this is the case, ensure that sentences still start with capital
// letters. '!' or '?' will not be used.

function acronymBuster(string) {
  var acronyms = {
    'KPI': 'key performance indicators',
    'EOD': 'the end of the day',
    'TBD': 'to be decided',
    'WAH': 'work at home',
    'IAM': 'in a meeting',
    'OOO': 'out of office',
    'NRN': 'no reply necessary',
    'CTA': 'call to action',
    'SWOT': 'strengths, weaknesses, opportunities and threats'
  }
  var sentenceArray = string.split(' ');
  console.log(sentenceArray);
  if (sentenceArray.length === 1) {
    if (sentenceArray[0].replace(/[.,]/, '').length<3 && sentenceArray.length === 1 && acronyms.hasOwnProperty(sentenceArray[0])==false) {
      return string;
    } else if (sentenceArray[0].replace(/[.,]/, '') == sentenceArray[0].replace(/[.,]/, '').toUpperCase() && acronyms.hasOwnProperty(sentenceArray[0])==false && sentenceArray[0].replace(/[.,]/, '').length<3) {
      return string;
    } else if (acronyms.hasOwnProperty(sentenceArray[0].replace(/[.,]/, '')) && sentenceArray[0].indexOf('.')===-1) {
      return acronyms[string].charAt(0).toUpperCase() + acronyms[string].slice(1);
    } else if (acronyms.hasOwnProperty(sentenceArray[0].replace(/[.,]/, '')) && sentenceArray[0].indexOf('.')>-1) {
      return acronyms[sentenceArray[0].replace(/[.,]/, '')].charAt(0).toUpperCase() + acronyms[sentenceArray[0].replace(/[.,]/, '')].slice(1) + '.';
    }
  }

  var newMessage = [];
  for (var i=0; i<sentenceArray.length; i++) {
    var temp = sentenceArray[i].replace(/[.,]/, ''); // 'NRN.' --> 'NRN'
    if (temp == temp.toUpperCase() && temp.length === 3 && acronyms[temp]) {
      if (sentenceArray[i].indexOf('.') > -1 && sentenceArray[i-1].indexOf('.') > -1) {
        newMessage.push(acronyms[temp].charAt(0).toUpperCase() + acronyms[temp].slice(1) + '.');
      } else if (sentenceArray[i].indexOf('.') === sentenceArray[i].length-1) {
        newMessage.push(acronyms[temp] + '.');
      } else if (i !== 0 && sentenceArray[i-1].indexOf('.') > -1) {
        newMessage.push(acronyms[temp].charAt(0).toUpperCase() + acronyms[temp].slice(1));
      } else {
        newMessage.push(acronyms[temp]);
      }
    } else if (temp.length >= 3 && temp == temp.toUpperCase()) {
      return temp + ' is an acronym. I do not like acronyms. Please remove them from your email.';
    } else {
      newMessage.push(sentenceArray[i]);
    }
  }
  var output = newMessage.join(' ');
  return output.charAt(0).toUpperCase() + output.slice(1);
}
console.log(acronymBuster("Going to WAH today. NRN. OOO"), "|||", "Going to work at home today. No reply necessary. Out of office");
console.log(acronymBuster("BRB I need to go into a KPIs meeting before EOP"), "|||", "BRB is an acronym. I do not like acronyms. Please remove them from your email.");
console.log(acronymBuster("OOO"), "|||", "Out of office");
console.log(acronymBuster("TBD by EOD"), "|||", "To be decided by end of the day");
console.log(acronymBuster("HATDBEA"), "|||", "HATDBEA is an acronym. I do not like acronyms. Please remove them from your email");
console.log(acronymBuster("SWOT."), "|||", "Strengths, weaknesses, opportunities and threats.");
console.log(acronymBuster("FA"), "|||", "FA");
