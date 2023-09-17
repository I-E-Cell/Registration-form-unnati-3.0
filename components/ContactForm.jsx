"use client";

import { useState } from "react";

export default function ContactForm() {
  const [teamname, setTeamname] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [member3, setMember3] = useState("");
  
  
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [email3, setEmail3] = useState("");

  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Team Name",teamname );

    console.log("Member1: ", member1);
    console.log("Member2: ", member2);
    console.log("Member3: ", member3);
    

    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        teamname,
        member1,
        member2,
        member3,
        email1,
        email2,
        email3,
        phone1,
        phone2,
        phone3,

      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setTeamname("");
      setMember1("");
      setMember2("");
      setMember3("");
      setEmail1("");
      setEmail2("");
      setEmail3("");
      setPhone1("");
      setPhone2("");
      setPhone3("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label className="text-white" htmlFor="teamname">Team Name</label>
          <input className="text-white"
            onChange={(e) => setTeamname(e.target.value)}
            value={teamname}
            type=""
            id="teamname"
            placeholder=""
          />
        </div>

        <div>
          <label className="text-white" htmlFor="member1">Team Leader</label>
          <input className="text-white"
            onChange={(e) => setMember1(e.target.value)}
            value={member1}
            type="text"
            id="member1"
            placeholder=""
          />
        </div>

        <div>
          <label className="text-white" htmlFor="email"> Team Leader's Email</label>
          <input className="text-white"
            onChange={(e) => setEmail1(e.target.value)}
            value={email1}
            type="text"
            id="email"
            placeholder=""
          />
        </div>
        <div>
          <label className="text-white" htmlFor="email"> Team Leader's Whatsapp Number</label>
          <input className="text-white"
            onChange={(e) => setPhone1(e.target.value)}
            value={phone1}
            type="text"
            id="phone1"
            placeholder=""
          />
        </div>

        <div>
          <label className="text-white" htmlFor="member2">Member 2</label>
          <input className="text-white"
            onChange={(e) => setMember2(e.target.value)}
            value={member2}
            type="text"
            id="member2"
            placeholder=""
          />
        </div>
        <div>
          <label className="text-white" htmlFor="email">Email</label>
          <input className="text-white"
            onChange={(e) => setEmail2(e.target.value)}
            value={email2}
            type="text"
            id="email"
            placeholder="abcd_12345@gmail.com"
          />
          </div>
          <div>
          <label className="text-white" htmlFor="email"> Team Leader's Email</label>
          <input className="text-white"
            onChange={(e) => setPhone2(e.target.value)}
            value={phone2}
            type="text"
            id="phone2"
            placeholder=""
          />
        </div>
        <div>
          <label className="text-white" htmlFor="member3">Member 3 </label>
          <input className="text-white"
            onChange={(e) => setMember3(e.target.value)}
            value={member3}
            type="text"
            id="member3"
            placeholder=""
          />
        </div>
        <div>
          <label className="text-white" htmlFor="email">Email</label>
          <input className="text-white"
            onChange={(e) => setEmail3(e.target.value)}
            value={email3}
            type="text"
            id="email"
            placeholder="abcd_12345@gmail.com"
          />
          </div>

        <div>
          <label className="text-white" htmlFor="message">Number</label>
          <input className="text-white"
            onChange={(e) => setPhone3(e.target.value)}
            value={phone3}
            id="phone3"
            placeholder=""
          ></input>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
