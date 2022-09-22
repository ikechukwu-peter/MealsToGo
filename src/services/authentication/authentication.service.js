import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { authentication } from "../../../firebase/firebase-config";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(authentication, email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(authentication, email, password);
};
