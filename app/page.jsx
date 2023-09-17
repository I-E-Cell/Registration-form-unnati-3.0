import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
    <div className=" ">
    <div className=" bg-gradient-to-r border-2  border-pink-400 shadow-2xl shadow-white/60 from-cyan-500 to-blue-500 opacity-60   backdrop-blur-md p-4  my-6 max-w-3xl mx-auto ">
      
      <h1 className="text-3xl font-bold text-white">Registration Form</h1>
      <p className="text-white">Please fill in the form below</p>

      <ContactForm />
      
    </div>
    </div>
  );
}
