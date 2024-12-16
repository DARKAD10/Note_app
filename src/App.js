
import './App.css';


import AddNote from './components/AddNote';

function App() {
 return(
   <>
<header class="bg-gray-800 text-white">

  <nav class="flex items-center justify-between px-6 py-4">
    <div class="text-2xl font-semibold">
      <a href="#" class="hover:text-green-400">NoteApp</a>
    </div>
    <ul class="flex space-x-8">
      <li>
        <a href="#home" class="hover:text-blue-400">Home</a>
      </li>
      <li>
        <a href="#about" class="hover:text-blue-400">About</a>
      </li>
      <li>
        <a href="#services" class="hover:text-blue-400">Services</a>
      </li>
      <li>
        <a href="#contact" class="hover:text-blue-400">Contact</a>
      </li>
    </ul>
  </nav>


  <div class="text-center py-10 px-4">
    <h1 class="text-5xl font-bold text-gray-100 leading-tight">
      Welcome to the Note App...
    </h1>
    <p class="mt-4 text-lg text-gray-300">
      Explore our services and learn more about us.
    </p>
  </div>
</header>
<AddNote/>


   </>
  

    

   
 )
   
}

export default App;
