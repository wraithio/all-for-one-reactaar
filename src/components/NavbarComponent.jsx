import { Navbar } from "flowbite-react";
import { Drawer } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const NavbarComponent = (description) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <Navbar fluid className=" p-7 absolute min-w-full">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to="/">
          <h2 className="hover:text-gray-300">Home</h2>
        </NavLink>
        <NavLink onClick={() => setIsOpen(true)}>
          <h2 className="hover:text-gray-300">Rules</h2>
        </NavLink>
      </Navbar.Collapse>
      <Drawer
        className="bg-black"
        open={isOpen}
        onClose={handleClose}
        position="top"
      >
        <Drawer.Header title="All For One: Rules" />
        <Drawer.Items className="grid grid-rows-5 grid-cols-2">
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Say Hello:</b> enter a name and recieve a warm greeting.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Asking Questions:</b>Answer a couple questions and receive a
            custom greeting.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Add 2 Numbers:</b>Find the sum of any two numbers.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Greater Than/Less Than:</b>Enter two numbers to find out which is
            a greater value.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b> Mad Lib:</b>Enter custom words to create a custom story in wacky
            MADLIBS© fashion.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Odd Or Even:</b>Enter a number to find out if it is odd or even.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Reverse It (Word):</b>Enter a word and make it reversed!
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Reverse It (Number):</b>Enter a number and make it reversed!
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Magic 8 Ball:</b> Ask the 8 Ball a question and get a mysterious
            answer.
          </p>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <b>Restaurant Picker:</b>Pick a food genre and generate a random
            restaurant.
          </p>
        </Drawer.Items>
      </Drawer>{" "}
    </Navbar>
  );
};
export default NavbarComponent;
