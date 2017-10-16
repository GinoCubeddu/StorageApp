var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);

    window.localStorage.setItem("Key1", "Value1");
    window.localStorage.setItem("name", "gino");
    window.sessionStorage.setItem("age", "21");

    $("#localStorageCount").text(
      "I currently have " + window.localStorage.length + "items in my Local storage"
    );

    $("#sessionStorageCount").text(
      "I currently have " + window.sessionStorage.length + "items in my Session storage"
    );
  }
}
