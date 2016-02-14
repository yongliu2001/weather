var React = require('react-native');

var {
  AppRegistry,
  MapView,
  view,
  StyleSheet
} = React;


var Weather = React.createClass({
  render: function() {

    var pins = [{
      latitude: -37,
      longitude: 144
    }];

    return <MapView
              annotations={pins}
              onRegionChangeComplete={this.onRegionChangeComplete}
              style={styles.map}>
           </MapView>;
  },

  onRegionChangeComplete: function(region) {

  }
});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }

});


AppRegistry.registerComponent('weather', ()=>Weather);
