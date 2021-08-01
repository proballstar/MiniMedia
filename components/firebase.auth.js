import firebase from "firebase";

export default function initialize() {
    if(firebase.apps.length === 0) {
        var firebaseConfig = {
          apiKey: "AIzaSyC38WmVhfE2Ges5sE82fK4PlVd7E0oAgzI",
          authDomain: "testing123-165d0.firebaseapp.com",
          databaseURL: "https://testing123-165d0.firebaseio.com",
          projectId: "testing123-165d0",
          storageBucket: "testing123-165d0.appspot.com",
          messagingSenderId: "364097196294",
          appId: "1:364097196294:web:29796d99350a629904ce87",
          measurementId: "G-59EYY2JXD3"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      }
}