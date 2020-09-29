import React from 'react';
import "./styles.scss";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Splash = () => {
  const onForceReload = () => {

  };

  const onSeeWork = () => {
    
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={() => onForceReload()}>
          <Image style={styles.nitecoLogo} source={require('../../resources/images/niteco-logo.png') } />
        </TouchableOpacity>
        <Text style={styles.headlineText}>
        Transforming Digital into Business Solutions
        </Text>
        <View style={styles.loginContainer}>
          <TouchableOpacity>
          {/* <LinearGradient colors={['#ffc203', '#ffc203', '#ffc203']} style={styles.linearGradient}>
          </LinearGradient> */}
          </TouchableOpacity>
        </View>
        <Text style={styles.detailText}>
        We merge technical depth and business strategy to tailor-make digital products that turn innovation into your growth and profit.
        </Text>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, marginVertical: 50, width: '85%' }}>
            <Image style = {styles.servicesLogo} source={require('../../resources/images/logo-epi-w.png')}/>
            <Image style = {styles.servicesLogo} source={require('../../resources/images/logo-ms-w.png')}/>
            <Image style = {styles.servicesLogo} source={require('../../resources/images/logo-sitecore-w.png')}/>
        </View>
      </ScrollView>
      <View style={styles.plusContainer}>
        <TouchableOpacity onPress={() => onSeeWork()}>
          <Text style={styles.plusText}>
          TAP TO SEE OUR WORK
          </Text>
          <Image style={styles.plusIcon} source={require('../../resources/images/fa-plus.png') } />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#3A5997', height: '500px' }} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A5997',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    width: 100,
    height: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 3,
  },
  backgroundOverlay: {
    opacity: 0.5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  nitecoLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    marginTop: 60,
    width: 200
  },
  servicesLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain',
    width: 200,
    height: 80

  },
  // servicesContainer:{
  //   justifyContent:'space-between',
  //   flexDirection:'row',
  //   flex:1,
  //   marginTop:50,
  //   width: width *0.85
  // },
  plusIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    width: 80,
    height: 80,
    left: 35
  },
  loginContainer: {
    backgroundColor: 'transparent',
    marginTop: 30
  },
  contentContainer: {
    alignItems: 'center'
  },
  plusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    bottom: 20, marginTop: 20,
    padding: 20
  },
  buttonText: {
    fontSize: 20,
    // fontFamily: 'Gill Sans',
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    opacity: 0.8,
  },
  headlineText: {
    color: '#fff',
    textAlign: 'center',
    // fontFamily: 'Open Sans',
    backgroundColor: 'transparent',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    marginTop:40,
  },
  detailText: {
    color: '#fff',
    textAlign: 'center',
    // fontFamily: 'Open Sans',
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: '300',
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 30
  },
  plusText: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 15,
    alignSelf: 'center',
  },
});