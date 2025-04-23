// Import the functions you need from the SDKs you need
// 파이어베이스 설정 파일
// Firebase SDK를 사용하기 위해서는 
// Firebase Console에서 프로젝트를 생성하고 설정을 받아야 합니다.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkr10K8jpB3InkzDLgoV3NyR2mfQ_Z9sU",
    authDomain: "my-firebase-app-61c78.firebaseapp.com",
    projectId: "my-firebase-app-61c78",
    storageBucket: "my-firebase-app-61c78.firebasestorage.app",
    messagingSenderId: "688027240799",
    appId: "1:688027240799:web:5b3be8cf036d930e9cceea"
  };

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
// initializeApp은 Firebase 앱을 초기화하는 함수입니다.
// Firebase 앱을 초기화하면 Firebase 서비스에 접근할 수 있습니다.

// 파이어베이스 DB연결하여 가져오기
export const db = getFirestore(app);
// getFirestore는 Firestore 데이터베이스에 대한 인스턴스를 가져오는 함수입니다.
// Firestore는 Firebase의 NoSQL 클라우드 데이터베이스입니다.
// 이것만 내보내면 내가 만든 DB와 연결하여 테이블을 사용할 수 있다!

