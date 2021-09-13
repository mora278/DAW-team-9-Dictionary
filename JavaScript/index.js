const lineBreaker = '</br>';

function test() {
  console.log('Word: ' + $('#word').val());
}

function getOxfordApi() {
  var word = $('#word').val();
  var url = 'http://localhost:8080/definitions?word=' + word;
  console.log('url');
  console.log(url);
  $.getJSON(url, function(json) {
    console.log(json);


    const phoneticSpelling = json.results[0].lexicalEntries[0].entries[0].pronunciations[0].phoneticSpelling
    const definitonsArray = json.results[0].lexicalEntries[0].entries[0].senses

    var stringToReturn = 'Word: ' + word + lineBreaker + 'Phonetic Spelling: ' + phoneticSpelling + lineBreaker + 'Definitions:' + lineBreaker

    //console.log(parsed);     
    console.log('Phonetic: ' + phoneticSpelling);
    console.log('Definitions: ' + definitonsArray);

    for (const element of definitonsArray) {
      console.log('Definitions: ' + element.definitions);
      //stringToReturn += '' + element.definitions + '\n'
      if (element.subsenses != null) {
        console.log('Subsenses: ' + element.subsenses[0].definitions);
      }
      //stringToReturn += '\n'
    }

    definitonsArray.forEach(function (value, i) {
      stringToReturn += '<tab>' + (i + 1) + '.- ' + value.definitions + lineBreaker
      if (value.subsenses != null) {
        stringToReturn += '<tab><tab>' + value.subsenses[0].definitions + lineBreaker;
      }
    });

    $('#result').html('<p>' + stringToReturn + '</p>')
  });
}