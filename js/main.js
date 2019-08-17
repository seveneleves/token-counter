window.onload = function () {
  var array = [];

  //Blockchain address

  var blockchainRequestURL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xbf0776118b8c7e41b2409295307d557ca16fa989&address=0x9c66cf3fa2ABc4d706d1dEd2b9Bd252E10096327&tag=latest&apikey=ZDKXHZTTJDJFHMZQC7WJRV5H7BCPBBYIFK';
  var blockchainRequest = new XMLHttpRequest();
  blockchainRequest.open('GET', blockchainRequestURL);
  blockchainRequest.responseType = 'text';
  blockchainRequest.send();

  blockchainRequest.onload = function() {
    var bc_etherAddressText = blockchainRequest.response
    var bc_etherAddress = JSON.parse(bc_etherAddressText);
    showBlockchainTokens(bc_etherAddress);
  }

  function showBlockchainTokens(jsonObj) {
    var bc_counter = document.getElementById('bc_token_counter');
    bc_counter.textContent = jsonObj['result'];
    array.push(Number(jsonObj['result']));
  }

  //AI address

  var aiRequestURL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xbf0776118b8c7e41b2409295307d557ca16fa989&address=0x334592C96de5c21009F4A7424d64Eec117AfB315&tag=latest&apikey=ZDKXHZTTJDJFHMZQC7WJRV5H7BCPBBYIFK';
  var aiRequest = new XMLHttpRequest();
  aiRequest.open('GET', aiRequestURL);
  aiRequest.responseType = 'text';
  aiRequest.send();

  aiRequest.onload = function() {
    var ai_etherAddressText = aiRequest.response
    var ai_etherAddress = JSON.parse(ai_etherAddressText);
    showAiTokens(ai_etherAddress);
  }

  function showAiTokens(jsonObj) {
    var ai_counter = document.getElementById('ai_token_counter');
    ai_counter.textContent = jsonObj['result'];
    array.push(Number(jsonObj['result']));
  }

  //Big Data address

  var bgRequestURL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xbf0776118b8c7e41b2409295307d557ca16fa989&address=0x6c452727B9Fee468a5ECb0DdF8e69cCa605536ac&tag=latest&apikey=ZDKXHZTTJDJFHMZQC7WJRV5H7BCPBBYIFK';
  var bgRequest = new XMLHttpRequest();
  bgRequest.open('GET', bgRequestURL);
  bgRequest.responseType = 'text';
  bgRequest.send();

  bgRequest.onload = function() {
    var bg_etherAddressText = bgRequest.response
    var bg_etherAddress = JSON.parse(bg_etherAddressText);
    showBgTokens(bg_etherAddress);
  }

  function showBgTokens(jsonObj) {
    var bg_counter = document.getElementById('bg_token_counter');
    bg_counter.textContent = jsonObj['result'];
    array.push(Number(jsonObj['result']));
  }

  //Smart Workplace address

  var smartRequestURL = 'https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xbf0776118b8c7e41b2409295307d557ca16fa989&address=0x528b32B0E1D7ab66670E74D68D5d060cFfddc1df&tag=latest&apikey=ZDKXHZTTJDJFHMZQC7WJRV5H7BCPBBYIFK';
  var smartRequest = new XMLHttpRequest();
  smartRequest.open('GET', smartRequestURL);
  smartRequest.responseType = 'text';
  smartRequest.send();

  smartRequest.onload = function() {
    var smart_etherAddressText = smartRequest.response
    var smart_etherAddress = JSON.parse(smart_etherAddressText);
    showSmartTokens(smart_etherAddress);
  }

  function showSmartTokens(jsonObj) {
    var smart_counter = document.getElementById('smart_token_counter');
    smart_counter.textContent = jsonObj['result'];
    array.push(Number(jsonObj['result']));
  }

  function timeout () {
    document.getElementById('total_votes').textContent = (array[0] + array[1] + array[2] + array[3])
  };
  setTimeout(timeout, 750);
}
