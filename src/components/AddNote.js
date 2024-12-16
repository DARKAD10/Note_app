import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, updateNote } from '../app/noteSlice';


const AddNote = () => {
  const [note, setNote] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState(null); // Holds the note being edited
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();
  const [search, setSearch]= useState('');

  
  const handleAddOrUpdateNote = () => {
    if (note.trim()) {
      if (isEditing) {
        // Update existing note
        dispatch(updateNote({ id: editingNote.id, newContent: note }));
        setIsEditing(false);
        setEditingNote(null);
      } else {
        // Add new note
        dispatch(addNote(note));
      }
      setNote('');
      setShowInput(false);
    }
  };


  const handleStartUpdate = (note) => {
    setShowInput(true);
    setIsEditing(true);
    setEditingNote(note); // Set the current note to edit
    setNote(note.content); // adds the updated on setnote
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-4 rounded-r-xl shadow-lg flex flex-col items-center space-y-4">
        <button
          onClick={() => setShowInput(true)}
          className="text-white text-lg py-2 px-4 rounded-full hover:bg-gray-700 focus:outline-none transition duration-200"
        >
          ➕ Create
        </button>


      </div>
      <div className="bg-pink-800 py-6 px-7 flex flex-row items-center justify-center gap-6 rounded-lg shadow-lg m-auto my-12 w-1/3">
  <input 
    type="text" 
    value={search}
     onChange={(e) =>setSearch(e.target.value)
     }
    className="w-2/3 max-w-md px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
    placeholder="Search Your Notes" 
  />

</div>

      
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        {showInput && (
          <div className="bg-white p-6 rounded-lg shadow-xl w-full sm:w-96 mx-auto mb-6">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full h-24 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={isEditing ? 'Update your note...' : 'Type your note here...'}
            />
            <div className="mt-2 flex space-x-2">
              <button
                onClick={handleAddOrUpdateNote}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                {isEditing ? 'Save Changes' : 'Save'}
              </button>
              <button
                onClick={() => {
                  setShowInput(false);
                  setIsEditing(false);
                  setEditingNote(null);
                  setNote('');
                }}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.filter((oneNote) =>
      oneNote.content.toLowerCase().includes(search.toLowerCase())
    )

          .map((oneNote) => (
            <div
              key={oneNote.id}
              className="p-5 bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-200 flex flex-col justify-between"
            >
              <p className="text-gray-800 mb-4">{oneNote.content}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleStartUpdate(oneNote)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition duration-200"
                >
                  ✏️ Update
                </button>
                <button
                  onClick={() => handleDeleteNote(oneNote.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800 transition duration-200"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default AddNote;
