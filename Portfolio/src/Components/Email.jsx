import {useState} from "react";

export default function Email() {
const [clicked, setClicked] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ff9427c6-e9f6-413a-9429-2c305e2a4753");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setClicked(!clicked);
    } else {
      console.error("Error", res);
    }
  };

    const handleClick = () => {
        setClicked(!clicked);
    }


  return (
    <>
      <div className="absolute left-15 right-15 top-40 sm:text-8xl text-6xl whitespace-nowrap">
        CONTACT ME
      </div>

      <div className="absolute left-15 sm:top-80 top-65 text-xl right-15 max-w-160">
        For any inquiries, potential collaborations, creative ideas, or simply
        to say hello, I’d absolutely love to hear from you! Don’t hesitate to
        reach out — let’s connect, share ideas, and start a conversation.
      </div>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-2 gap-x-8 gap-y-4 p-8 w-full lg:max-w-1/2 form absolute top-120"
      >
        <label className="text-left">FIRST NAME</label>
        <label className="text-left">LAST NAME</label>

        <input
          type="text"
          name="first_name"
          className="bg-neutral-300 h-13 rounded-2xl p-2"
          placeholder="First name"
          required
        />
        <input
          type="text"
          name="last_name"
          className="bg-neutral-300 h-13 rounded-2xl p-2"
          placeholder="Last name"
          required
        />

        <label className="col-span-2 text-left">EMAIL</label>
        <input
          type="email"
          name="email"
          className="col-span-2 bg-neutral-300 h-13 rounded-2xl p-2"
          placeholder="Email"
          required
        />

        <label className="col-span-2 text-left">MESSAGE</label>
        <textarea
          name="message"
          className="col-span-2 bg-neutral-300 h-40 rounded-2xl p-4 resize-none"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="shadow-2xl col-span-2 bg-emerald-900 hover:bg-emerald-950 h-13 mt-5 rounded-2xl p-2 text-white"
        >
          SEND
        </button>

        <div className="text-4xl xl:whitespace-nowrap md:mt-20 w-100 mt-10">
        FREQUENTLY ASKED QUESTIONS
      </div>
      </form>

{clicked && (
<>
<div className="h-full w-full bg-black/70 z-50 fixed"></div>
<div 
onClick={handleClick}
className="fixed bg-black border-white border-4 w-100 h-100 rounded-4xl top-80 left-1/2 -translate-x-1/2 z-60 text-white">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
className="size-50 left-1/2 -translate-x-1/2 absolute mt-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


<div className="text-center absolute bottom-20 left-1/2 -translate-x-1/2 text-3xl">
  Email sent
  </div>

  
</div>
</>
)}
    



    </>
  );
}