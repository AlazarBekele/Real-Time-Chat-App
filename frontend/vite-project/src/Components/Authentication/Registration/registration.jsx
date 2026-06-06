import { useState } from "react";
// Icons
import { Icons } from "../../../assets/Icons/Icons";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";

// Showing Authentication row
import { updateProfile } from "firebase/auth";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearForm = () => {
    (setFirstname(""), setLastname(""), setEmail(""), setPassword(""));
  };

  const handleRegister = async () => {
    try {
      console.log("Step 1");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log("Step 2");
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstname: firstname,
        lastname: lastname,
        email: email,
        photoURL: "",
        isOnline: true,
        createdAt: serverTimestamp(),
      });

      await updateProfile(user, {
        displayName: `${firstname} ${lastname}`,
      });

      clearForm();

      console.log(`User ${firstname} ${lastname} is Regisiter Successfully!!`);
      console.log("Step 3");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        window.alert("The Email Is Already Used!");
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div>
        <div className="w-[400px] h-[600px]">
          <label className="w-full px-2 relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              First Name
            </span>
            <Icons.name className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
            <input
              className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              value={firstname}
              type="text"
              id="username"
              placeholder="Jone"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>

          <label className="w-full px-2 relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Last Name
            </span>
            <Icons.name className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
            <input
              className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              value={lastname}
              type="text"
              id="username"
              placeholder="Doe"
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>

          <label className="w-full px-2 relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Email
            </span>
            <Icons.user className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
            <input
              className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              value={email}
              type="email"
              id="username"
              placeholder="Example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="w-full px-2 relative block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">
              Password
            </span>
            <Icons.passowrd className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
            <input
              className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
              value={password}
              type="password"
              id="username"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
}

export default Register;
