function getOxfordApiTest() {
  const app_id = '5197b755';
  const app_key = 'db4d018579f1b488ab2167d66cd2ce72';
  const language = "en-us";
  var word_id = 'hello';
  var url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/' + language + '/' + word_id.toLowerCase() + "?fields=definitions&strictMatch=false";

  var request = new XMLHttpRequest();

  request.open('GET', url, true);
  request.setRequestHeader('app_id', app_id); 
  request.setRequestHeader('app_key', app_key);
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  request.setRequestHeader('Access-Contorl-Allow-Methods', 'Origin, Content-Type, Accept, Authorization, X-Request-With');


  request.onload = function() {
      //Begin accessing JSON data here

      var data = JSON.parse(this.response);
      console.log(data);
  }

  request.send();
}